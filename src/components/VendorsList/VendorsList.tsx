import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVendors } from "../../actions/vendorsActions";
import {
  Vendor,
  VendorsListInterface,
} from "../../reducers/VendorsListReducer";
import { vendorsList } from "../../utils/API";
import { hasScrollReachedBottom } from "../../utils/functions";
import VendorItem from "../VendorItem/VendorItem";
import "./styles.scss";

interface Props {
  containerRef: { current: HTMLDivElement | null };
}
const VendorsList = (props: Props) => {
  const { configs: vendorsConfig, vendors } = useSelector(
    (state: { vendorsList: VendorsListInterface }) => state.vendorsList
  );
  const vendorsDispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(0);
  const [hasNext, setHasNext] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getVendersListFromServer(true);
  }, [vendorsConfig]);

  useEffect(() => {
    getVendersListFromServer();
  }, [pageNumber]);

  const getVendersListFromServer = (configsChanged = false) => {
    setIsLoading(true);
    let pageNum = getAndSetPageNumberBasedOnChangesInConfigs(configsChanged);
    let prevData =
      getAndSetVendorsPrevDataBasedOnChangesInConfigs(configsChanged);
    const resp = vendorsList(pageNum, vendorsConfig.lat, vendorsConfig.long);
    resp
      .then((data) => {
        console.log("data ------>", data);
        let vendorData = extractVendorsDataFromApiResponse(
          data.data.finalResult
        );
        let newData: Vendor[] = [...prevData, ...vendorData];
        vendorsDispatch(setVendors(newData));
        setIsLoading(false);
        setHasNext(!!data.data.finalResult.length);
      })
      .catch((err) => {
        setIsLoading(false);
        setHasNext(false);
        console.log("Errrr :(((", err);
      });
  };

  const extractVendorsDataFromApiResponse = (
    response: { data: Vendor; type: string }[]
  ) => {
    let vendorsResponse = response.filter((item) => item.type === "VENDOR");
    let data = vendorsResponse.map((v) => v.data);
    return data;
  };

  const getAndSetPageNumberBasedOnChangesInConfigs = (
    configsChanged: boolean
  ) => {
    let pageNum = pageNumber;
    if (configsChanged) {
      pageNum = 0;
      setPageNumber(0);
      setHasNext(true);
    }
    return pageNum;
  };

  const getAndSetVendorsPrevDataBasedOnChangesInConfigs = (
    configsChanged: boolean
  ) => {
    let data = vendors;
    if (configsChanged) {
      data = [];
      vendorsDispatch(setVendors([]));
      setHasNext(true);
    }
    return data;
  };

  const scrollHandler = (e: any) => {
    let scrollTop = e.target.scrollTop;
    if (
      hasScrollReachedBottom(scrollTop, props.containerRef.current) &&
      !isLoading &&
      hasNext
    ) {
      setPageNumber((prev) => prev + 1);
    }
  };

  useEffect(() => {
    props.containerRef.current?.addEventListener("scroll", scrollHandler);
    return () => {
      props.containerRef.current?.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const implementLoading = () => {
    let numberOfSkeletons =
      vendors.length && isLoading ? 1 : !vendors.length ? 3 : 0;
    let tempArray = new Array(numberOfSkeletons).fill(0);

    let skeletons = tempArray.map((item, i) => {
      return <VendorItem isSkeleton={true} key={i} />;
    });

    return skeletons;
  };

  return (
    <div className="venders-container" onScroll={scrollHandler}>
      {vendors.map((item, i: number) => {
        return <VendorItem data={item} key={i} />;
      })}
      {implementLoading()}
    </div>
  );
};

export default VendorsList;
