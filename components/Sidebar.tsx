import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { AiOutlineMenu, AiFillHome } from "react-icons/ai";
import Link from "next/link";
import GoogleLogin from "react-google-login";
import Discover from "./Discover";
import SuggestedAccounts from "./SuggestedAccounts";
import CustomeFooter from "./CustomFooter";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const normalLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#F51997] rounded';
  const userProfile = false;
  return (
    <>
      <div>
      <div onClick={() => setShowSidebar((prev) => !prev)}>
        {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
      </div>
      {showSidebar && (
        <div className="xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3">
          <div className="xl:border-b-2 border-gray-200 xl:pb-4">
            <Link href={"/"}>
              <div className={normalLink}>
                <p className="text-2xl"><AiFillHome /><span className="text-xl hidden xl:block">For you</span></p>
              </div>
            </Link>
          </div>
          { !userProfile && (
            <div className = "px-2 py-4 hidden xl:block">
                <p className="text-gray-400"> Log in to like and comment on videos</p>
                <div className="pr-4">
                    <GoogleLogin
                        clientId=""
                        render={(renderProps) => (
                            <button className="cursor-pointer bg-white text-lg text-[#F51997] font-semibold px-6 py-3 rounded-md outline-none w-full mt-3 hover:text-white hover:bg=[#F51997]" onClick={renderProps.onClick} disabled={renderProps.disabled}>Log in</button>
                          )}
                        onSuccess={() => {}}
                        onFailure={() => {}}
                        cookiePolicy='single_host_origin'
                    />
                </div>
            </div>
          )}
          <Discover />
          <SuggestedAccounts />
          <CustomeFooter />
        </div>
      )}
    </div>
    </>
  );
};

export default Sidebar;
