import React from 'react';
import { ThumbsUp } from 'lucide-react';
import { handleImageError } from '../lib/images';

/**
 * "Our Moments" asymmetric photo grid and the Facebook CTA beneath it.
 * Shared by the home, about and history routes.
 */
export default function MomentsGallery() {
  return (
    <div className="w-full px-6 sm:px-8 lg:px-12 max-w-320 mx-auto relative z-10">
        {/* SECTION 5: PHOTO GALLERY */}
        <section
          id="moments-gallery"
          className="max-w-320 mx-auto pt-20 pb-16 border-t border-amber-500/20 mt-20"
        >
          <div className="text-center mb-12">
            <p className="font-sans text-[12px] uppercase tracking-widest text-amber-500 font-semibold mb-2 flex justify-center items-center gap-2">
              — OUR MOMENTS
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-amber-50 tracking-tight text-center capitalize leading-[1.1]">
              Capturing the Soul of Puppetry
            </h2>
            <div className="w-16 h-px mx-auto mt-6 bg-amber-500/30" />
          </div>

          {/* Asymmetric 12-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Column 1 (4 cols) */}
            <div className="md:col-span-4 flex flex-col gap-4">
              <div className="group overflow-hidden h-85 relative border border-[#534343]">
                <img
              onError={handleImageError}
                  alt="Marionette face detail"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-UbeI5srglrVDlkMMkSu7Ywx_pvTJfv-US95L8mJ-Sh0DESS5Z9beYYbbNjuuj3EYpICEUHQ3oxjA9hcLG3jGDd0XGmKGGOnr4J14fUfFoEMnmaK_UjxPcIM0jpD-Av16a2zxJuDwAkWu0lKsgoGlnHrCWE_Uxy_9emzC3KCnO8v7JjOAok85Mb1iCrM9jGBC9wDVj05cyhr0Qp1_QY8VfeLJcLbs48RpBl2t-23rjX7upemyQlZagFLsU_mBcLRf6iJjP32jlydRUQ"
                />
              </div>
              <div className="group overflow-hidden h-70 relative border border-[#534343]">
                <img
              onError={handleImageError}
                  alt="Stage action"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgrtUEyiVD3soKrnR3PVKqKhkTgfNVhUr8EgtsTiXBs8LH0Yu8nTui3BzoDyosKjfuuy8uIUFmWBmv_3swcFeuCyK61QZiTgCcbSri1PDhgXDyYyV_pG9mtJ40HGArnnsFK55DYA0LORvaENo7zDJvK6RtNeDLCdC14L57RRUyiEAbx1OrUB_dbh5HilzETLGumpXAEE69cFSRc7EB9tdK4IIoNgWDbScwrOJSRvM3yo5IZ6x5kifcsQ9xS8Ck2SnEy94-WOxvHdnA5g"
                />
              </div>
              <div className="group overflow-hidden h-55 relative border border-[#534343]">
                <img
              onError={handleImageError}
                  alt="Full troupe"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1Kcsp9QDSJqnUvlNSIVtYyd6EXk8NBcmUUhrVSw4idQZjH9spqPN0qEAiYjCM7wLEN0oaEc02zvUNsuxtkNsEmsL8ImHSOXws6tLHCMbu7MU8-ZnA2QBSuhJeSJToxMYc-vWJ7R00cvgFAsRyJoQBejjfk7khT-0h-_TXtOJvjqYcscLyhsia1j-0ox7GYYM3ThxFfST8OXEujX-ryTJepZRjaOBKCUO00b5_9-wYRaLTRAMTH5tzA2qLwMM8J9X29YIHfV8AKtgL5g"
                />
              </div>
            </div>

            {/* Column 2 (2 cols) */}
            <div className="md:col-span-2 flex flex-col gap-4">
              <div className="group overflow-hidden h-[165px] border border-[#534343]">
                <img
              onError={handleImageError}
                  alt="String mechanism"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXRJIgfo0mu7pGuYZn6EECGiEgRUbKwk35poHkBI8ZfUz6jTvo0nxcPFSkPdG22oj3goHPK2nIetDnDqDwwA-HYf0Wj2CiTbIUXhpY2g_GQTKyjkc7fp5JgCDv8H10edg7cPUSVZX9Ro_53yR5iZ6v3w-v1RlJc0vK6HQ-xA0okHNhXFtZ8b1q97QJfikAewZxo3xO6BcoOx6xHJRJ1G0VRGdJF5koTqHf-Vt2FGbM2BfKDZP-j5QpslhDZP2aQPBJk89TQZ3_Gm38sw"
                />
              </div>
              <div className="group overflow-hidden h-[165px] border border-[#534343]">
                <img
              onError={handleImageError}
                  alt="Tools"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGV0eQC3J0EhL4F2cYQdYJsIeqacp3YlHwwy5gj0xHxTNZsuGD3sJbukEVUCnRO4DUPNxNzgCM9xSUXjz4SKkFJMdkzq0HVk4kUBPXwnkmJkxkkNE8R6fkFE6yv7aDzYTxlWXf0-ZEU9ewRY9GiTYaHbBo-g8xb534lHNJjbT7pB8atD_SJwZ7lFHIeqmzxKf-OWCy8r0Ky6rJ4VrCjSPa_Fcd-vQRUvpp_GnKY2d-cQ-cC4AjhYRUM1L_hJFpuV1lE68Fn4ntuj_VUw"
                />
              </div>
              <div className="group overflow-hidden h-45 border border-[#534343]">
                <img
              onError={handleImageError}
                  alt="Embroidery"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_crnRXG7lYkGnfbugu4YsDFiTOdnrayGnDJOWS5FFBGR-bravxMKOdw_y3eLgzA8hB5STYqaON7_7FpP5akxcEjU3U6ht80wVKpKjI3vUv2Yd9MB9ENDrBtbEEQmwohw-wmruNnYZizpnhsOK_WKVHAK8bxaNf75JBaQSbECaz48w8XXCsQMm5ImzHEpgOZku4PrDwT8mOofdPWrRnvA_-3zQh-ZBzx6T-Rp-Su93ADFWh4Y_N5qduUcLlFXme5fz0Jc72Y5Z1yAgTQ"
                />
              </div>
              <div className="group overflow-hidden h-35 border border-[#534343]">
                <img
              onError={handleImageError}
                  alt="Hand position"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtmD5eptDVH1JzvD4fRI_MKeohlaFeay0kmE6LHzWOQFf6NxwEDkVFHiar125afSW_OTVkrsB0Io-K2-lmMG9Zymjrx5nwWAUR6pgHvfrM5cGyQ4gHgdplJlC1IsWYt9MzrDFhGgO3deMaIOLTviV0IIyuJYpcufdD2oAA6LfNqrGXn9WP-ILw0OcFWTZ5wxNbgMmQ1dXAlmxVXRIMgQ5Vk0CtbOiWOjTKPMR8UF3fLA_kXWVlSzyFmXW82u54YoxcfqajMY7nmsAaFQ"
                />
              </div>
            </div>

            {/* Column 3 (3 cols) */}
            <div className="md:col-span-3 flex flex-col gap-4">
              <div className="group overflow-hidden h-60 border border-[#534343]">
                <img
              onError={handleImageError}
                  alt="Rehearsal"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDeot4wCGdi8yNx0ou4kmotOn5NceB-CyoZu07ee1JNfHklNGhcg55A-DusH3MECokKbrCc3qbWYRoDSI4kpM_yZZps-gN6Eor94kUdmgGnrqy-zO1YJzdsJJduhzSds802lgQFGEsoUpd2lHoL62G_YpF36zBedle-13ydEwbQ98OJkLwOyaK6tPs-8XShsACC1KSOpYEDUQmDSNI1UcgGSVczF8jWlUPIIONqe_rDHfAHqcNb8iKTSEQSCFR6KtaCW7MzxYHX4Yp6Q"
                />
              </div>
              <div className="group overflow-hidden h-45 border border-[#534343]">
                <img
              onError={handleImageError}
                  alt="Orchestra"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCqITHT_nn-njXHceuRL052nYDhDQqGJlerePJolGABkAzw9wmjylaBQbpLf-B4359BmJ-JgY6VX5QT7YBd_SvVbe8MHt2IDb4N87XNAc-204YZqWqiEc3jbE2WKWU2qQntqBT846HkAeoabaz_xgmQSvvyuBz4DtEPfnmWdU5WjFs88L5U8p5MLJ0iWePEtpi8DJHcdpqywJcxDdyB7SHOKzMA3nPKvVEGemyNEYP_RZRPIzEY3dYIYyGV2KmgwsBD2FtTwArzOoPlA"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 h-[130px]">
                <div className="group overflow-hidden border border-[#534343]">
                  <img
              onError={handleImageError}
                    alt="Festival stage"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlqUGE94NmMDVC1e1UNWplucxEOPyztWK1sLNP9K5LGqcaxf_4FIUdXNLCXtjYK9Ww6DGWZAAya8pK8wIPjhL4m50jxXV9F_cyDjUYtIJ1EvsRtYLzv3X58WkeQFWjl63J_9YD_vFaej9DM6mEU_0hsro6DUKCkohzzyvcxebkaA2RjovzXRy0o-bhrec9nPSBGWaPyBY0zjNHYr-3EjN6JLhWFd4RqROkxFIUPDB-CuwJzDpupFajMqfNVb74MzlQ-f1lU34CRq6qHA"
                  />
                </div>
                <div className="group overflow-hidden border border-[#534343]">
                  <img
              onError={handleImageError}
                    alt="UNIMA award"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCN9gJ2zbVaACUdGvFSIdUzQW3AvGl9Lxt1SqlkxQICYlpydPx0NliijpVZXicFlTH4ngba4uJI-fxQQBA1RwUBG-Gnq0W_xPqmxGijpYDdZW6aVGco-6qm78k9ySrS3EGjt9CAS8Q88ivK_kHha4x7DehJQrJb40UAYI7UV-fsOUOWHHOX_6_9MnhAF0LQs2pu_x6aVZ-c_Aiu32yX94qgrOwCwxu8z0oX0aREA8wNB508w7-wE-6uFGHQpzlm479KRoQ2e44OZ87zjg"
                  />
                </div>
              </div>
            </div>

            {/* Column 4 (3 cols) */}
            <div className="md:col-span-3 flex flex-col gap-4">
              <div className="group overflow-hidden h-90 border border-[#534343]">
                <img
              onError={handleImageError}
                  alt="Master Khin Maung Htwe"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoNcw3VcUUw-2HJiiuX-_GQ_JAIoAWibMEGA6DlpcALRtMPQJw7WwByr9JN2otaKr_zngu1eAfNJj-HoSxqOli65nNvpDnD-xMtUNCzwq5n5SplRVSOStKvz_Y4cO89OwOyi4IH4AwTH5kn3_z5thnSgDuKyX6j5a3wwPh1s8kROF3m04vgzvRTMl1h7GdAIvIt9RK-kcIHPpHL7NjawAPMgbFS5JgdVapWRna5fGSLTQ5iZ54hfO5SxZNFKpezhDvku21jvchYY6T-w"
                />
              </div>
              <div className="group overflow-hidden h-115 border border-[#534343]">
                <img
              onError={handleImageError}
                  alt="Group award photo"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjICRZjtGYvMTdkh7YX7aty6-gTQ9e86GtNXn1rCXnF6R7-SZ3xsJQd6K5ciKq6j5AXMReiBM7fdg74Dft2NFrB6EWGcVqGpBsjnHZJ5L3vX4wOzlza8pvD159r9wyDjJxryrAaT_aOKHDRLMS9bkOD0HWxvh2JDXxHW9gL8zHg9MJs7nBkt4CyjA0KHO7EJHyeU7HoZWuS7qPVsYCp7LMTYNtFpsdyS0WRCSayPF8ePbQtYuxKv0LGQRULkLTe0UMMfiSKnbuu1b47g"
                />
              </div>
            </div>
          </div>

          {/* Social CTA */}
          <div className="mt-16 text-center">
            <a
              className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-stone-950 font-sans text-[12px] font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_4px_20px_rgba(217,119,6,0.35)] hover:scale-[1.02]"
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ThumbsUp className="w-4 h-4 fill-stone-950" />
              <span className="text-stone-950 font-bold">VIEW MORE LIVE PHOTOS ON OUR FACEBOOK FAN PAGE</span>
            </a>
          </div>
        </section>
    </div>
  );
}
