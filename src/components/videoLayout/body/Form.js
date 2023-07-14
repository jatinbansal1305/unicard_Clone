import React from 'react';

const Form=()=>{
    return(
        <div className="flex justify-between items-center block max-w-[94vw]">
        <div className="flex flex-col">
          <form>
            <div className="flex bg-black p-1 pl-2 rounded-xl justify-between">
              <div className="flex items-center">
                <input
                  className="bg-black border-0 outline-none text-white p-1 placeholder-[#7E8587] w-44"
                  placeholder="Enter Phone Number"
                  defaultValue=""
                />
                <span className="w-6 flex items-center justify-end h-full" />
              </div>
              <button
                type="submit"
                className="text-center text-sm leading-7 justify-between pt-2 ml-2 bg-[rgba(253,239,120,1)] rounded-xl z-10 py-2 px-4 disabled:opacity-80 disabled:cursor-not-allowed"
              >
                <span>Apply Now</span>
              </button>
            </div>
          </form>
          <div className="consent flex items-center py-4 px-2 max-w-xs" >
            <input type="checkbox" defaultChecked="" id="consent-msg" />
            <label
              htmlFor="consent-msg"
              className="consent text-white md:text-black text-[10px] leading-3 cursor-pointer"
            >
              You agree to be contacted by Uni Cards over Call, SMS, Email
              or WhatsApp to guide you through your application.
            </label>
          </div>
        </div>
      </div>
    )
}

export default Form