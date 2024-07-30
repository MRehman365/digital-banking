import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-card text-card-foreground p-6">
              <div className=" mx-auto flex flex-col md:flex-row justify-between">
                <div className="flex-1">
                  <h3 className="font-bold">DBOS</h3>
                  <ul className="mt-2">
                    <li>Micro ATM</li>
                    <li>UPI QR</li>
                    <li>Domestic Money Transfer</li>
                    <li>Insurance</li>
                  </ul>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold">Consumers</h3>
                  <ul className="mt-2">
                    <li>Bank Account</li>
                    <li>Payments</li>
                    <li>Loans</li>
                    <li>Investments</li>
                    <li>Insurance</li>
                  </ul>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold">Policies</h3>
                  <ul className="mt-2">
                    <li>ERP Policy</li>
                    <li>KYC Policy</li>
                    <li>Performance Evaluation Policy</li>
                    <li>Terms of Use - Merchants</li>
                  </ul>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold">Legal</h3>
                  <ul className="mt-2">
                    <li>Disclaimer</li>
                    <li>Annual Report 22-23</li>
                    <li>Annual Return 22-23</li>
                    <li>Privacy</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm mt-2">© 2018 Designed and Developed by PlanetC Technology</p>
                <div className="flex justify-center space-x-4 mt-2">
                  
                </div>
              </div>
            </footer>
    </div>
  )
}

export default Footer
