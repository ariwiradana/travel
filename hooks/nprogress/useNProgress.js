import { useEffect } from "react";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import { useRouter } from "next/router";

const useNProgress = () => {
  const router = useRouter();
  useEffect(() => {
    NProgress.configure({
      showSpinner: false,
    });
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteDone);
    router.events.on("routeChangeError", handleRouteDone);

    return () => {
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteDone);
      router.events.off("routeChangeError", handleRouteDone);
    };
  }, [router.events]);
};

export default useNProgress;
