import React from "react";
import companyPartnerLogo from "./companyLogo.data.json";
import "./companyPartner.models.css";
interface iCompanyCompanyPartnerPartner {
  _id: number;
  companyName: string;
  companyLogoUrl: string;
}

const CompanyPartner = () => {
  return (
    <section className="companyPartner">
      <div className="companyPartner___container">
        {companyPartnerLogo.map(
          (item: iCompanyCompanyPartnerPartner, index: number) => (
            <div key={index} className="companyPartner___container--logo" >
              <img
                src={`https://drive.google.com/uc?export=view&id=${item.companyLogoUrl}`}
                alt={item.companyName}
              />
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default CompanyPartner;
