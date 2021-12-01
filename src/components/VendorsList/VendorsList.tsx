import React, { UIEventHandler, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { VendorsListInterface } from "../../reducers/VendorsListReducer";
import { vendorsList } from "../../utils/API";
import { hasScrollReachedBottom } from "../../utils/functions";
import Loading from "../Loading/Loading";
import VendorItem from "../VendorItem/VendorItem";
import "./styles.scss";

interface Props {
  containerRef: { current: HTMLDivElement | null };
}
const VendorsList = (props: Props) => {
  const vendorsInfo = useSelector(
    (state: { vendorsList: VendorsListInterface }) => state.vendorsList
  );
  const [pageNumber, setPageNumber] = useState(0);
  const [hasNext, setHasNext] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [vendors, setVendors] = useState([] as any);

  useEffect(() => {
    getVendersListFromServer(true);
  }, [vendorsInfo.configs]);

  useEffect(() => {
    getVendersListFromServer();
  }, [pageNumber]);

  const getVendersListFromServer = (configsChanged = false) => {
    setIsLoading(true);
    let pageNum = getAndSetPageNumberBasedOnChangesInConfigs(configsChanged);
    let prevData =
      getAndSetVendorsPrevDataBasedOnChangesInConfigs(configsChanged);
    const resp = vendorsList(
      pageNum,
      vendorsInfo.configs.lat,
      vendorsInfo.configs.long
    );
    resp
      .then((data) => {
        console.log("data ------>", data);
        let newData = [...prevData, ...data.data.finalResult];
        setVendors(newData);
        setIsLoading(false);
        setHasNext(!!data.data.finalResult.length);
      })
      .catch((err) => {
        setIsLoading(false);
        setHasNext(false);
        console.log("Errrr :(((", err);
      });
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
      setVendors([]);
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

  return (
    <div className="venders-container" onScroll={scrollHandler}>
      {vendors.map((item: { data: any; type: string }, i: number) => {
        return (
          item.type === "VENDOR" && <VendorItem data={item.data} key={i} />
        );
      })}
      {isLoading && <Loading active={isLoading} />}
    </div>
  );
};

export default VendorsList;
