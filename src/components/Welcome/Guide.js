
export default function Guide({ handleModal }) {
  return (
    <div className="absolute bg-white w-[80%]">
      {handleModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-900 outline-none focus:outline-none">
                <div className="flex items-start justify-between p-6 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-white">Dimension Wallet Guide</h3>
                </div>

                <div className="relative p-6 flex-auto">

                  <p className="my-4 text-slate-300 text-lg leading-relaxed">
                    1. Download <strong>Metamask extension</strong> for your browser from&nbsp;
                    <a href="https://metamask.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">metamask.io</a>.
                  </p>
                  <p className="my-4 text-slate-300 text-lg leading-relaxed">
                    2. Setup your wallet with testnet networks in order to avoid losing your funds.
                  </p>
                  <blockquote className="border-l-2 border-slate-400 ml-5 pl-2 my-4 text-slate-400 text-lg leading-relaxed">
                    To be able to access the website completely for free, you should use testnet networks.
                  </blockquote>
                  <p className="my-4 text-slate-300 text-lg leading-relaxed">
                    3. Get free testnet Ethereum from testnet faucets such as <a href="https://rinkebyfaucet.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">rinkebyfaucet.com</a>.
                  </p>
                  <blockquote className="border-l-2 border-slate-400 ml-5 pl-2 my-4 text-slate-400 text-lg leading-relaxed">
                    You can use any testnet network since they all have faucets to acquire free testnet Ethereum, however I advise utilizing the <strong>Rinkeby network</strong>.
                  </blockquote>
                  <p className="my-4 text-slate-300 text-lg leading-relaxed">
                    4. Enjoy my services by connecting your wallet to the website.
                  </p>
                </div>

                
                <div className="flex items-center justify-end p-5 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleModal}
                  >
                    OK!
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  )
}
