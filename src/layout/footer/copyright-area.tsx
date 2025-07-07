import Link from "next/link";
import React from "react";

const CopyrightArea = ({ wrapperClass, footerClass }: any) => {
  return (
    <div
      className={
        footerClass ? `footer__bottom ${footerClass}` : "footer__bottom"
      }
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div
              className={
                wrapperClass
                  ? `footer__copyright text-center ${wrapperClass}`
                  : "footer__copyright text-center"
              }
            >
              <p>
                © 2025 RAHSM, All Rights Reserved. Design By{" "}
                <Link href="www.biproconnect.com">Business Promoters</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyrightArea;
