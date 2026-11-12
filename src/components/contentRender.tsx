import type { MyPet } from "../types";
import React from "react";

export const ContentRender: React.FC<MyPet> = ({ ...props }) => {
    return(
        <div 
                className="card border-0 mb-4 text-light rounded-4 shadow-lg"
                style={{
                    backgroundColor: "rgba(30, 41, 59, 0.7)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)"
                }}>
                <div className="card-body p-4 text-start">
                    <h3 className="h5 text-info border-start border-4 border-info ps-3 mb-4 fw-bold">
                        {props.type}
                    </h3>

                    <div className="text-center mb-5">
                    <img 
                        src={props.img[2]} 
                        alt="img"
                        className="img-fluid"
                        style={{ 
                            maxHeight: "540px", 
                            objectFit: "contain",
                            filter: "drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.6))"
                        }}
                    />
                    </div>
                    
                    <div className="bg-info bg-opacity-10 border border-info border-opacity-25 text-light p-3 rounded-3 mb-4">
                        <p className="mb-0 text-break w-100 fs-6 lh-base text-start">
                            {props.shortInfo}
                        </p>
                    </div>

                    <div className="d-flex flex-column gap-3">

                        {props.stats.map((inf, index) => (
                            <div key={index} className="d-flex align-items-start gap-3">
                                <span 
                                    className="mt-2 bg-info rounded-circle flex-shrink-0" 
                                    style={{ width: "8px", height: "8px" }}
                                ></span>
                                <span className="fs-6 lh-base text-light opacity-90">
                                {inf}
                                </span>
                            </div> 
                        ))}
                        
                    </div>
                </div>
            </div>
    );
};
