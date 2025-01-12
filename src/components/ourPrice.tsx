import { useTranslations } from "next-intl";
import React, { useRef } from "react";

export default function OurPrice() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const dialogRef2 = useRef<HTMLDialogElement | null>(null);

  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
      document.body.classList.add("blurred");
    }
  };

  // Закрытие первого модального окна
  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
      document.body.classList.remove("blurred");
    }
  };

  const openDialog2 = () => {
    if (dialogRef2.current) {
      dialogRef2.current.showModal(); // Исправлено: используем dialogRef2
      document.body.classList.add("blurred");
    }
  };

  // Закрытие второго модального окна
  const closeDialog2 = () => {
    if (dialogRef2.current) {
      dialogRef2.current.close(); // Исправлено: используем dialogRef2
      document.body.classList.remove("blurred");
    }
  };
  const t = useTranslations();

  return (
    <section id="price" className="min-h-screen w-full pt-10 bg-[#DADEDF]">
      <div className="flex flex-col flex-wrap justify-center max-w-screen-xl mx-auto pt-10 px-2 sm:px-5">
        <h2 className="mx-auto text-5xl text-[#333333] mb-5">
          {t("ourPrice")}
        </h2>
        <div className="flex flex-col justify-center shadow-xl shadow-[#FAF3E0] items-center min-h-screen bg-[#FAF3E0] bg-no-repeat bg-center bg-cover rounded-3xl">
          <div className="flex flex-col sm:flex-col md:flex-row justify-center gap-8 pt-20 w-full max-w-screen-xl p-4">
            {/* Первый блок */}
            <div className="font-geologica w-full sm:max-w-lg bg-[#ECECE2] flex flex-col justify-between items-center p-6 gap-y-3 rounded-lg shadow-lg h-auto">
              <h2 className="font-bold text-[#333] text-xl text-center">
                <span className="text-2xl text-yellow-500">
                  {t("theSmallTourH2")}
                </span>
                {t("theSmallTourS")}
              </h2>
              <h2 className="font-bold text-[#333] text-xl text-center">
                {t("routeSmall")}
              </h2>
              <button
                onClick={openDialog}
                type="button"
                className="bg-[#756C63] text-white text-2xl font-bold rounded-full p-4 mt-4 hover:bg-[#5E564D] shadow-[0px_4px_0px_#5E564D] hover:shadow-[0px_2px_0px_#5E564D] hover:translate-y-[2px] duration-200"
              >
                {t("bookNow")}
              </button>
              <dialog
                ref={dialogRef}
                className=" rounded-3xl w-max  p-10 text-center  sm:mx-auto xs:w-full bg-[#FAF3E0] md:w-[900px]"
                style={{
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  margin: "0",
                  boxShadow: "0px 5px 10px 6px rgba(236, 236, 226, 1)",
                }}
              >
                <div className="text-[#333]  ">
                  <h2 className="text-3xl font-bold text-yellow-400">
                    {t("theSmallTourH2")}
                  </h2>
                  <div className="flex flex-col text-[#666666]">
                    <p>{t("pS1")}</p>
                    <p>{t("pS2")}</p>
                    <p>{t("pS3")}</p>
                    <p>{t("pS4")}</p>
                    <p>{t("pS5")}</p>
                    <p>{t("pS6")}</p>
                    <p>{t("pS7")}</p>

                    <a
                      href="https://wa.me/38268322923?text=Hello%2C%20I%20am%20interested%20in%20the%20Small%20Tour"
                      className="flex justify-center text-white px-3 text-3xl items-center gap-x-3 mt-5  font-geologica bg-green-600 font-bold rounded-3xl p-2 shadow-[0px_4px_0px_#00a900] hover:translate-y-1 hover:shadow-[0px_2px_0px_#92b212] active:translate-y-2 active:shadow-none transition-all duration-300 w-auto mx-auto"
                    >
                      WhatsApp
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                      >
                        <path
                          fill="#f2faff"
                          d="M4.221,29.298l-0.104-0.181c-1.608-2.786-2.459-5.969-2.458-9.205C1.663,9.76,9.926,1.5,20.078,1.5	c4.926,0.002,9.553,1.919,13.03,5.399c3.477,3.48,5.392,8.107,5.392,13.028c-0.005,10.153-8.268,18.414-18.42,18.414	c-3.082-0.002-6.126-0.776-8.811-2.24l-0.174-0.096l-9.385,2.46L4.221,29.298z"
                        ></path>
                        <path
                          fill="#788b9c"
                          d="M20.078,2L20.078,2c4.791,0.001,9.293,1.867,12.676,5.253C36.137,10.639,38,15.14,38,19.927	c-0.005,9.878-8.043,17.914-17.927,17.914c-2.991-0.001-5.952-0.755-8.564-2.18l-0.349-0.19l-0.384,0.101l-8.354,2.19l2.226-8.131	l0.11-0.403L4.55,28.867c-1.566-2.711-2.393-5.808-2.391-8.955C2.163,10.036,10.202,2,20.078,2 M20.078,1	C9.651,1,1.163,9.485,1.158,19.912c-0.002,3.333,0.869,6.588,2.525,9.455L1,39.169l10.03-2.63c2.763,1.507,5.875,2.3,9.042,2.302	h0.008c10.427,0,18.915-8.485,18.92-18.914c0-5.054-1.966-9.807-5.538-13.382C29.89,2.971,25.14,1.002,20.078,1L20.078,1z"
                        ></path>
                        <path
                          fill="#79ba7e"
                          d="M19.995,35c-2.504-0.001-4.982-0.632-7.166-1.823l-1.433-0.782l-1.579,0.414l-3.241,0.85l0.83-3.03	l0.453-1.656L7,27.485c-1.309-2.267-2.001-4.858-2-7.492C5.004,11.726,11.732,5.001,19.998,5c4.011,0.001,7.779,1.563,10.61,4.397	C33.441,12.231,35,15.999,35,20.005C34.996,28.273,28.268,35,19.995,35z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M28.28,23.688c-0.45-0.224-2.66-1.313-3.071-1.462c-0.413-0.151-0.712-0.224-1.012,0.224	c-0.3,0.45-1.161,1.462-1.423,1.761c-0.262,0.3-0.524,0.337-0.974,0.113c-0.45-0.224-1.899-0.7-3.615-2.231	c-1.337-1.191-2.239-2.663-2.501-3.113c-0.262-0.45-0.029-0.693,0.197-0.917c0.202-0.202,0.45-0.525,0.674-0.787	c0.224-0.262,0.3-0.45,0.45-0.75c0.151-0.3,0.075-0.563-0.038-0.787s-1.012-2.437-1.387-3.336c-0.364-0.876-0.736-0.757-1.012-0.771	c-0.262-0.014-0.562-0.015-0.861-0.015c-0.3,0-0.787,0.113-1.198,0.563s-1.573,1.537-1.573,3.749s1.611,4.35,1.835,4.649	c0.224,0.3,3.169,4.839,7.68,6.786c1.072,0.462,1.911,0.739,2.562,0.947c1.076,0.342,2.057,0.294,2.832,0.178	c0.864-0.129,2.66-1.087,3.034-2.136c0.375-1.049,0.375-1.95,0.262-2.136C29.03,24.025,28.731,23.912,28.28,23.688z"
                        ></path>
                      </svg>
                    </a>
                    <button
                      onClick={closeDialog}
                      type="button"
                      className=" px-5 py-2 mx-auto w-auto mb-0 mt-5 text-2xl font-bold text-white bg-[#756C63] hover:bg-[#5E564D]  rounded-[30px]  shadow-[0px_2px_0px_0.5px_rgba(186, 159, 140, 1)] hover:translate-y-[2px] hover:shadow-lg focus:outline-none focus:ring-0  focus:ring-offset-0"
                    >
                      {t("btnTour")}
                    </button>
                  </div>
                </div>
              </dialog>
            </div>

            {/* Второй блок */}
            <div className="font-geologica w-full sm:max-w-lg bg-[#ECECE2] flex flex-col justify-center items-center gap-y-3 p-6 rounded-lg shadow-lg">
              <h2 className="font-bold text-[#333] text-xl text-center">
                <span className="text-2xl text-yellow-500">
                  {t("theGrandTour")}
                </span>{" "}
                {t("theGrandTourS")}
              </h2>
              <h2 className="font-bold text-[#333] text-xl text-center">
                {t("routeGrand")}
              </h2>
              <button
                onClick={openDialog2}
                type="button"
                className="bg-[#756C63] text-white text-2xl font-bold rounded-full p-4 mt-4 hover:bg-[#5E564D] shadow-[0px_4px_0px_#5E564D] hover:shadow-[0px_2px_0px_#5E564D] hover:translate-y-[2px] duration-200"
              >
                {t("bookNow")}
              </button>
              <dialog
                ref={dialogRef2}
                className=" rounded-3xl w-max  p-10 text-center  sm:mx-auto xs:w-full bg-[#FAF3E0] md:w-[900px]"
                style={{
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  margin: "0",
                  boxShadow: "0px 5px 10px 6px rgba(236, 236, 226, 1)",
                }}
              >
                <div className="text-[#333]  ">
                  <h2 className="text-3xl font-bold text-yellow-400">
                    {t("theGrandTour")}
                  </h2>
                  <div className="flex flex-col text-[#666666]">
                    <p> {t("pG1")}</p>
                    <p> {t("pG2")}</p>
                    <p> {t("pG3")}</p>
                    <p> {t("pG4")}</p>
                    <p> {t("pG5")}</p>
                    <p> {t("pG6")}</p>
                    <p> {t("pG7")}</p>
                    <p> {t("pG8")}</p>

                    <a
                      href="https://wa.me/38268322923?text=Hello%2C%20I%20am%20interested%20in%20the%20Graund%20Tour%20"
                      className="flex justify-center text-white px-3 text-3xl items-center gap-x-3 mt-5  font-geologica bg-green-600 font-bold rounded-3xl p-2 shadow-[0px_4px_0px_#00a900] hover:translate-y-1 hover:shadow-[0px_2px_0px_#92b212] active:translate-y-2 active:shadow-none transition-all duration-300 w-auto mx-auto"
                    >
                      WhatsApp
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                      >
                        <path
                          fill="#f2faff"
                          d="M4.221,29.298l-0.104-0.181c-1.608-2.786-2.459-5.969-2.458-9.205C1.663,9.76,9.926,1.5,20.078,1.5	c4.926,0.002,9.553,1.919,13.03,5.399c3.477,3.48,5.392,8.107,5.392,13.028c-0.005,10.153-8.268,18.414-18.42,18.414	c-3.082-0.002-6.126-0.776-8.811-2.24l-0.174-0.096l-9.385,2.46L4.221,29.298z"
                        ></path>
                        <path
                          fill="#788b9c"
                          d="M20.078,2L20.078,2c4.791,0.001,9.293,1.867,12.676,5.253C36.137,10.639,38,15.14,38,19.927	c-0.005,9.878-8.043,17.914-17.927,17.914c-2.991-0.001-5.952-0.755-8.564-2.18l-0.349-0.19l-0.384,0.101l-8.354,2.19l2.226-8.131	l0.11-0.403L4.55,28.867c-1.566-2.711-2.393-5.808-2.391-8.955C2.163,10.036,10.202,2,20.078,2 M20.078,1	C9.651,1,1.163,9.485,1.158,19.912c-0.002,3.333,0.869,6.588,2.525,9.455L1,39.169l10.03-2.63c2.763,1.507,5.875,2.3,9.042,2.302	h0.008c10.427,0,18.915-8.485,18.92-18.914c0-5.054-1.966-9.807-5.538-13.382C29.89,2.971,25.14,1.002,20.078,1L20.078,1z"
                        ></path>
                        <path
                          fill="#79ba7e"
                          d="M19.995,35c-2.504-0.001-4.982-0.632-7.166-1.823l-1.433-0.782l-1.579,0.414l-3.241,0.85l0.83-3.03	l0.453-1.656L7,27.485c-1.309-2.267-2.001-4.858-2-7.492C5.004,11.726,11.732,5.001,19.998,5c4.011,0.001,7.779,1.563,10.61,4.397	C33.441,12.231,35,15.999,35,20.005C34.996,28.273,28.268,35,19.995,35z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M28.28,23.688c-0.45-0.224-2.66-1.313-3.071-1.462c-0.413-0.151-0.712-0.224-1.012,0.224	c-0.3,0.45-1.161,1.462-1.423,1.761c-0.262,0.3-0.524,0.337-0.974,0.113c-0.45-0.224-1.899-0.7-3.615-2.231	c-1.337-1.191-2.239-2.663-2.501-3.113c-0.262-0.45-0.029-0.693,0.197-0.917c0.202-0.202,0.45-0.525,0.674-0.787	c0.224-0.262,0.3-0.45,0.45-0.75c0.151-0.3,0.075-0.563-0.038-0.787s-1.012-2.437-1.387-3.336c-0.364-0.876-0.736-0.757-1.012-0.771	c-0.262-0.014-0.562-0.015-0.861-0.015c-0.3,0-0.787,0.113-1.198,0.563s-1.573,1.537-1.573,3.749s1.611,4.35,1.835,4.649	c0.224,0.3,3.169,4.839,7.68,6.786c1.072,0.462,1.911,0.739,2.562,0.947c1.076,0.342,2.057,0.294,2.832,0.178	c0.864-0.129,2.66-1.087,3.034-2.136c0.375-1.049,0.375-1.95,0.262-2.136C29.03,24.025,28.731,23.912,28.28,23.688z"
                        ></path>
                      </svg>
                    </a>
                    <button
                      onClick={closeDialog2}
                      type="button"
                      className=" px-5 py-2 mx-auto w-auto mb-0 mt-5 text-2xl font-bold text-white bg-[#756C63] hover:bg-[#5E564D]  rounded-[30px]  shadow-[0px_2px_0px_0.5px_rgba(186, 159, 140, 1)] hover:translate-y-[2px] hover:shadow-lg focus:outline-none focus:ring-0  focus:ring-offset-0"
                    >
                      {t("btnTour")}
                    </button>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
