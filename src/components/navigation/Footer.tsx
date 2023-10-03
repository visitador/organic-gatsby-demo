import React from "react";
import { ButtonInput } from "../ButtonInput";
import { Block } from "../Layout";

import { Logo } from "../Logo";

export const Footer: React.FC = () => (
  <div>
    <SubscribeBlock />
    <MenuBlock menu={footerMenu}/>
    <CopyrightBlock />
  </div>
);

type FooterMenuLink = {
  title: string;
  href: string;
};

type FooterMenuCategory = {
  title: string;
  links: FooterMenuLink[];
};

type FooterMenu = FooterMenuCategory[];

const footerMenu: FooterMenu = [
  {
    title: "My Account",
    links: [
      { title: "My Account", href: "/" },
      { title: "Order History", href: "/" },
      { title: "Shopping Cart", href: "/" },
      { title: "Wishlist", href: "/" },
    ],
  },
  {
    title: "Helps",
    links: [
      { title: "Contact", href: "/" },
      { title: "Faqs", href: "/" },
      { title: "Terms & Condition", href: "/" },
      { title: "Privacy Policy", href: "/" },
    ],
  },
  {
    title: "Proxy",
    links: [
      { title: "About", href: "/" },
      { title: "Shop", href: "/" },
      { title: "Product", href: "/" },
      { title: "Track Order", href: "/" },
    ],
  },
  {
    title: "Categories",
    links: [
      { title: "Fruit & Vegetables", href: "/" },
      { title: "Meat & Fish", href: "/" },
      { title: "Bread & Bakery", href: "/" },
      { title: "Beauty & Health", href: "/" },
    ],
  },
];

export const MenuBlock: React.FC<{ menu: FooterMenu }> = ({ menu }) => (
  <Block className="py-14 flex" rowClassName="bg-greyscale-900">
    <div className="mr-32 w-80 flex-none space-y-4">
      <Logo className="text-white"/>
      <div className="text-bodysmall text-greyscale-500">
      Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.
      </div>
      <div className="space-x-4 flex items-center">
        <div className="border-b py-2 border-b-primary text-bodysmall font-medium text-white">(219) 555-0114</div>
        <div className="text-bodymedium text-greyscale-500">or</div>
        <div className="border-b py-2 border-b-primary text-bodysmall font-medium text-white">Proxy@gmail.com</div>
      </div>
    </div>
    {menu.map((category) => (
      <div className="flex-1 pr-4">
        <div className="text-bodymedium font-medium text-white">
          {category.title}
        </div>
        <div className="mt-5 text-bodysmall text-greyscale-400 space-y-3 ">
          {category.links.map((link) => (
            <div className="hover:text-white cursor-pointer w-fit">{link.title}</div>
          ))}
        </div>
      </div>
    ))}
  </Block>
);

export const CopyrightBlock: React.FC = () => (
  <Block
    className="py-6 flex items-center border-t border-greyscale-800"
    rowClassName="bg-greyscale-900"
  >
    <div className="mr-auto text-bodysmall text-greyscale-500">
      Ecobazar eCommerce © 2021. All Rights Reserved
    </div>
    <div className="space-x-2 flex items-stretch h-8 text-white">
      <div className="flex items-center w-11 justify-center border border-solid border-greyscale-800 rounded-md ">
        <svg
          width="33"
          height="15"
          viewBox="0 0 33 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.50643 2.04242C6.12872 2.50817 5.52438 2.87551 4.92005 2.82304C4.8445 2.19329 5.14038 1.52419 5.48661 1.11093C5.86432 0.632059 6.52532 0.290949 7.06041 0.264709C7.12336 0.920691 6.87785 1.56355 6.50643 2.04242ZM7.05396 2.94767C6.52155 2.91574 6.03575 3.11452 5.64335 3.27508C5.39084 3.3784 5.177 3.4659 5.01432 3.4659C4.83176 3.4659 4.6091 3.37372 4.3591 3.27023C4.03152 3.13463 3.657 2.97959 3.26426 2.98703C2.36405 3.00015 1.52679 3.53149 1.06724 4.37771C0.122958 6.07014 0.821725 8.57599 1.73453 9.95355C2.18149 10.6358 2.71658 11.3836 3.42164 11.3573C3.73182 11.3451 3.95495 11.2465 4.18587 11.1444C4.45172 11.0268 4.72789 10.9047 5.15911 10.9047C5.57538 10.9047 5.83948 11.0236 6.09299 11.1378C6.33404 11.2464 6.56553 11.3506 6.90917 11.3442C7.63942 11.3311 8.09897 10.662 8.54592 9.97979C9.02827 9.24758 9.24023 8.53298 9.2724 8.42453L9.27617 8.41199C9.2754 8.41119 9.26944 8.40834 9.25892 8.40333C9.09769 8.32641 7.86527 7.7385 7.85345 6.16198C7.84159 4.83872 8.83097 4.16827 8.98671 4.06273C8.99619 4.05631 9.00258 4.05198 9.00547 4.04972C8.37595 3.07887 7.3939 2.97391 7.05396 2.94767ZM12.1094 11.2721V1.04532H15.7921C17.6932 1.04532 19.0215 2.40976 19.0215 4.40395C19.0215 6.39813 17.668 7.77569 15.7417 7.77569H13.6328V11.2721H12.1094ZM13.6326 2.38352H15.389C16.7109 2.38352 17.4664 3.11821 17.4664 4.4105C17.4664 5.70278 16.7109 6.44404 15.3827 6.44404H13.6326V2.38352ZM24.0513 10.0454C23.6484 10.8457 22.7608 11.3508 21.8039 11.3508C20.3875 11.3508 19.3991 10.4718 19.3991 9.14668C19.3991 7.83472 20.356 7.08035 22.1249 6.96883L24.0261 6.85075V6.28661C24.0261 5.45351 23.5036 5.00089 22.5719 5.00089C21.8039 5.00089 21.2436 5.41416 21.1303 6.0439H19.758C19.802 4.71882 20.9981 3.75452 22.616 3.75452C24.3597 3.75452 25.4929 4.7057 25.4929 6.18165V11.2721H24.0827V10.0454H24.0513ZM22.2125 10.1372C21.4004 10.1372 20.8842 9.7305 20.8842 9.10732C20.8842 8.46446 21.3815 8.09055 22.3321 8.03152L24.0255 7.92V8.49726C24.0255 9.45499 23.2449 10.1372 22.2125 10.1372ZM30.1702 11.6722C29.5596 13.4631 28.8608 14.0534 27.3751 14.0534C27.2618 14.0534 26.8841 14.0403 26.796 14.0141V12.7874C26.8904 12.8005 27.1233 12.8136 27.2429 12.8136C27.9165 12.8136 28.2942 12.5184 28.5272 11.7509L28.6657 11.2983L26.0846 3.85294H27.6773L29.4714 9.89452H29.5029L31.2971 3.85294H32.8457L30.1702 11.6722Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="flex items-center w-11 justify-center border border-solid border-greyscale-800 rounded-md ">
        <svg
          width="32"
          height="12"
          viewBox="0 0 32 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.22787 10.9889H5.50174L3.45748 2.9605C3.36045 2.5912 3.15443 2.26471 2.85138 2.11084C2.09508 1.72414 1.26169 1.41638 0.352539 1.26117V0.952077H4.74412C5.35022 0.952077 5.80479 1.41638 5.88056 1.95562L6.94123 7.74675L9.66603 0.952077H12.3164L8.22787 10.9889ZM13.8314 10.9889H11.2568L13.3768 0.952077H15.9514L13.8314 10.9889ZM19.2823 3.73257C19.3581 3.19199 19.8127 2.8829 20.343 2.8829C21.1764 2.80529 22.0842 2.96051 22.8419 3.34587L23.2964 1.1849C22.5388 0.875811 21.7054 0.720596 20.9491 0.720596C18.4503 0.720596 16.632 2.11084 16.632 4.04032C16.632 5.50818 17.9199 6.2789 18.8291 6.74321C19.8127 7.20617 20.1915 7.51527 20.1157 7.97824C20.1157 8.67269 19.3581 8.98178 18.6018 8.98178C17.6927 8.98178 16.7835 8.7503 15.9514 8.3636L15.4969 10.5259C16.406 10.9113 17.3896 11.0665 18.2988 11.0665C21.1006 11.1427 22.8419 9.75384 22.8419 7.66914C22.8419 5.04387 19.2823 4.88999 19.2823 3.73257V3.73257ZM31.8528 10.9889L29.8085 0.952077H27.6127C27.1582 0.952077 26.7036 1.26117 26.5521 1.72414L22.7666 10.9889H25.417L25.946 9.52235H29.2024L29.5055 10.9889H31.8528ZM27.991 3.65498L28.7473 7.43767H26.6273L27.991 3.65498Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="flex items-end w-11 justify-end border border-solid border-greyscale-800 rounded-md ">
        <svg
          width="41"
          height="20"
          viewBox="0 0 41 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.5293 19.6765L40.6764 12.0662V15.7059C40.6764 17.8988 38.8987 19.6765 36.7058 19.6765H15.5293Z"
            fill="#FD6020"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M35.9033 1.05846C37.2868 1.05846 38.0477 1.69844 38.0477 2.9073C38.1169 3.83172 37.4943 4.61392 36.6642 4.75614L38.5319 7.38718H37.0793L35.4883 4.82725H35.3499V7.38718H34.174V1.05846H35.9033ZM35.3502 3.97396H35.6961C36.457 3.97396 36.8028 3.61841 36.8028 2.97843C36.8028 2.40955 36.457 2.05401 35.6961 2.05401H35.3502V3.97396ZM30.0929 7.38718H33.4132V6.32054H31.2688V4.61392H33.344V3.54728H31.2688V2.1251H33.4132V1.05846H30.0929V7.38718V7.38718ZM26.6345 5.32501L25.0435 1.05846H23.7984L26.3578 7.5294H26.9804L29.5398 1.05846H28.2947L26.6345 5.32501V5.32501ZM12.5917 4.25838C12.5917 6.03611 13.9751 7.52941 15.7045 7.52941C16.2579 7.52941 16.7421 7.38719 17.2263 7.17386V5.75168C16.8804 6.17833 16.3962 6.46277 15.8428 6.46277C14.736 6.46277 13.8368 5.60946 13.8368 4.47171V4.32949C13.7676 3.19175 14.6669 2.19622 15.7737 2.12511C16.327 2.12511 16.8804 2.40955 17.2263 2.8362V1.41402C16.8113 1.12958 16.2579 1.05847 15.7737 1.05847C13.9751 0.916252 12.5917 2.40955 12.5917 4.25838V4.25838ZM10.4476 3.47618C9.75583 3.19174 9.54831 3.04953 9.54831 2.69398C9.61749 2.26733 9.96336 1.91178 10.3784 1.98289C10.7243 1.98289 11.0701 2.19622 11.3468 2.48065L11.9694 1.62734C11.4852 1.20069 10.8626 0.91625 10.2401 0.91625C9.27162 0.845141 8.44153 1.62734 8.37236 2.62287V2.69398C8.37236 3.54729 8.71822 4.04506 9.82501 4.4006C10.1017 4.47171 10.3784 4.61393 10.6551 4.75615C10.8626 4.89837 11.001 5.11169 11.001 5.39613C11.001 5.89389 10.5859 6.32055 10.1709 6.32055H10.1017C9.54831 6.32055 9.06409 5.965 8.85657 5.46724L8.09566 6.24944C8.5107 7.03164 9.34079 7.4583 10.1709 7.4583C11.2777 7.52941 12.1769 6.6761 12.2461 5.53835V5.32502C12.1769 4.47171 11.8311 4.04506 10.4476 3.47618V3.47618ZM6.43543 7.38718H7.61139V1.05846H6.43543V7.38718V7.38718ZM0.970703 1.05848H2.70005H3.04592C4.70609 1.12959 6.0204 2.55177 5.95122 4.25839C5.95122 5.18281 5.53618 6.03612 4.84444 6.67611C4.22188 7.17387 3.46096 7.45831 2.70005 7.3872H0.970703V1.05848ZM2.49264 6.32054C3.04603 6.39164 3.6686 6.17832 4.08364 5.82277C4.49868 5.39612 4.70621 4.82724 4.70621 4.18726C4.70621 3.61838 4.49868 3.04951 4.08364 2.62286C3.6686 2.26731 3.04603 2.05398 2.49264 2.12509H2.14677V6.32054H2.49264Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.7543 0.911758C19.0249 0.911758 17.5723 2.33394 17.5723 4.18278C17.5723 5.96051 18.9557 7.45381 20.7543 7.52491C22.5528 7.59602 23.9363 6.10273 24.0054 4.25389C23.9363 2.40505 22.5528 0.911758 20.7543 0.911758V0.911758Z"
            fill="#FD6020"
          />
        </svg>
      </div>

      <div className="flex items-center w-11 justify-center border border-solid border-greyscale-800 rounded-md ">
        <svg
          width="31"
          height="19"
          viewBox="0 0 31 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.5585 18.3926C26.515 18.3926 30.533 14.4224 30.533 9.52496C30.533 4.6275 26.515 0.657318 21.5585 0.657318C19.3372 0.657318 17.3043 1.45477 15.7372 2.77576C14.1701 1.45478 12.1372 0.657326 9.91585 0.657326C4.9594 0.657326 0.941406 4.62751 0.941406 9.52497C0.941406 14.4224 4.9594 18.3926 9.91585 18.3926C12.1372 18.3926 14.1701 17.5952 15.7372 16.2742C17.3043 17.5952 19.3372 18.3926 21.5585 18.3926Z"
            fill="#ED0006"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.7368 16.2741C17.6663 14.6476 18.8898 12.2274 18.8898 9.52495C18.8898 6.82246 17.6663 4.40232 15.7368 2.77583C17.304 1.45479 19.3369 0.657303 21.5583 0.657303C26.5147 0.657303 30.5327 4.62748 30.5327 9.52495C30.5327 14.4224 26.5147 18.3926 21.5583 18.3926C19.3369 18.3926 17.304 17.5951 15.7368 16.2741Z"
            fill="#F9A000"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.737 16.2741C17.6665 14.6476 18.8899 12.2275 18.8899 9.52496C18.8899 6.82247 17.6665 4.40234 15.737 2.77585C13.8075 4.40234 12.584 6.82247 12.584 9.52496C12.584 12.2275 13.8075 14.6476 15.737 16.2741Z"
            fill="#FF5E00"
          />
        </svg>
      </div>
    </div>
  </Block>
);

export const SubscribeBlock: React.FC = () => (
  <Block
    className="flex items-center mx-auto py-10"
    rowClassName="bg-[#F7F7F7]"
  >
    <div className="mr-28">
      <div className="text-greyscale-900 font-semibold text-bodyxxl mb-1">
        Subscribe out Newsletter
      </div>
      <div className="text-bodysmall text-greyscale-400">
        Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
        Phasellus imperdiet elit eu magna.
      </div>
    </div>
    <ButtonInput placeholder="Your email address" buttonText="Subscribe"/>
    <div className="ml-10 flex space-x-2">
      <span className="w-10 h-10 flex items-center justify-center  rounded-full text-greyscale-700 hover:text-white hover:bg-primary cursor-pointer">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1913_2095)">
            <path
              d="M11.9978 2.98875H13.641V0.12675C13.3575 0.08775 12.3825 0 11.247 0C8.87776 0 7.25476 1.49025 7.25476 4.22925V6.75H4.64026V9.9495H7.25476V18H10.4603V9.95025H12.969L13.3673 6.75075H10.4595V4.5465C10.4603 3.62175 10.7093 2.98875 11.9978 2.98875Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_1913_2095">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </span>
      <span className="w-10 h-10 flex items-center justify-center text-greyscale-700 hover:text-white hover:bg-primary cursor-pointer rounded-full">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1913_2099)">
            <path
              d="M18 3.41888C17.3306 3.7125 16.6174 3.90713 15.8737 4.00163C16.6388 3.54488 17.2226 2.82713 17.4971 1.962C16.7839 2.38725 15.9964 2.68763 15.1571 2.85525C14.4799 2.13413 13.5146 1.6875 12.4616 1.6875C10.4186 1.6875 8.77387 3.34575 8.77387 5.37863C8.77387 5.67113 8.79862 5.95238 8.85938 6.22013C5.7915 6.0705 3.07687 4.60013 1.25325 2.36025C0.934875 2.91263 0.748125 3.54488 0.748125 4.2255C0.748125 5.5035 1.40625 6.63638 2.38725 7.29225C1.79437 7.281 1.21275 7.10888 0.72 6.83775C0.72 6.849 0.72 6.86363 0.72 6.87825C0.72 8.6715 1.99912 10.161 3.6765 10.5041C3.37612 10.5863 3.04875 10.6256 2.709 10.6256C2.47275 10.6256 2.23425 10.6121 2.01038 10.5626C2.4885 12.024 3.84525 13.0984 5.4585 13.1333C4.203 14.1154 2.60888 14.7071 0.883125 14.7071C0.5805 14.7071 0.29025 14.6936 0 14.6565C1.63462 15.7106 3.57188 16.3125 5.661 16.3125C12.4515 16.3125 16.164 10.6875 16.164 5.81175C16.164 5.64863 16.1584 5.49113 16.1505 5.33475C16.8829 4.815 17.4982 4.16588 18 3.41888Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_1913_2099">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </span>
      <span className="w-10 h-10 flex items-center justify-center text-greyscale-700 hover:text-white hover:bg-primary cursor-pointer rounded-full">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.24471 0C4.31136 0 1.68774 3.16139 1.68774 6.60855C1.68774 8.20724 2.58103 10.2008 4.01097 10.8331C4.22811 10.931 4.34624 10.8894 4.39462 10.688C4.43737 10.535 4.62525 9.79807 4.71638 9.45042C4.74451 9.33904 4.72988 9.24229 4.63988 9.13766C4.16511 8.58864 3.78821 7.58847 3.78821 6.65017C3.78821 4.24594 5.69967 1.91146 8.9522 1.91146C11.7648 1.91146 13.7325 3.73854 13.7325 6.35204C13.7325 9.30529 12.1698 11.3484 10.1391 11.3484C9.0152 11.3484 8.17816 10.4663 8.44367 9.37505C8.76431 8.07561 9.39321 6.6783 9.39321 5.74113C9.39321 4.90072 8.91844 4.20544 7.94865 4.20544C6.80447 4.20544 5.87631 5.33837 5.87631 6.85943C5.87631 7.82585 6.21832 8.47838 6.21832 8.47838C6.21832 8.47838 5.08652 13.0506 4.87614 13.9045C4.52062 15.3502 4.92451 17.6914 4.95939 17.8928C4.98077 18.0042 5.10565 18.0391 5.1754 17.9479C5.28678 17.8017 6.65484 15.8497 7.03848 14.4389C7.17799 13.9248 7.75064 11.84 7.75064 11.84C8.12753 12.5207 9.21546 13.0911 10.3743 13.0911C13.8214 13.0911 16.3123 10.0613 16.3123 6.30141C16.2999 2.69675 13.215 0 9.24471 0Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className="w-10 h-10 flex items-center justify-center text-greyscale-700 hover:text-white hover:bg-primary cursor-pointer rounded-full">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1913_2107)">
            <path
              d="M17.9824 5.29205C17.9402 4.33564 17.7855 3.67812 17.564 3.10836C17.3354 2.50359 16.9838 1.96213 16.5231 1.51201C16.073 1.05489 15.528 0.699691 14.9302 0.474702C14.3571 0.253147 13.703 0.0984842 12.7466 0.0563159C11.7831 0.0105764 11.4772 0 9.03336 0C6.58953 0 6.28364 0.0105764 5.32366 0.0527447C4.36725 0.0949129 3.70973 0.249713 3.14011 0.471131C2.5352 0.699691 1.99374 1.05132 1.54363 1.51201C1.08651 1.96213 0.731444 2.50716 0.506318 3.10493C0.284763 3.67812 0.1301 4.33207 0.087932 5.28848C0.0421926 6.25203 0.0316162 6.55792 0.0316162 9.00176C0.0316162 11.4456 0.0421926 11.7515 0.0843608 12.7115C0.126529 13.6679 0.281329 14.3254 0.502884 14.8952C0.731444 15.4999 1.08651 16.0414 1.54363 16.4915C1.99374 16.9486 2.53877 17.3038 3.13654 17.5288C3.70973 17.7504 4.36368 17.905 5.32022 17.9472C6.28007 17.9895 6.58609 17.9999 9.02993 17.9999C11.4738 17.9999 11.7797 17.9895 12.7396 17.9472C13.696 17.905 14.3536 17.7504 14.9232 17.5288C16.1329 17.0611 17.0893 16.1047 17.557 14.8952C17.7784 14.322 17.9332 13.6679 17.9754 12.7115C18.0175 11.7515 18.0281 11.4456 18.0281 9.00176C18.0281 6.55792 18.0245 6.25203 17.9824 5.29205ZM16.3614 12.6411C16.3227 13.5202 16.175 13.9949 16.052 14.3114C15.7495 15.0956 15.1271 15.7179 14.343 16.0204C14.0265 16.1434 13.5484 16.2911 12.6727 16.3297C11.7233 16.372 11.4386 16.3824 9.03693 16.3824C6.63527 16.3824 6.34696 16.372 5.40099 16.3297C4.52191 16.2911 4.04721 16.1434 3.73074 16.0204C3.34052 15.8761 2.98531 15.6476 2.697 15.3487C2.39812 15.0568 2.16956 14.7052 2.02533 14.315C1.90226 13.9985 1.75461 13.5202 1.71601 12.6447C1.6737 11.6953 1.66326 11.4104 1.66326 9.00876C1.66326 6.60709 1.6737 6.31878 1.71601 5.37295C1.75461 4.49387 1.90226 4.01917 2.02533 3.7027C2.16956 3.31234 2.39812 2.95727 2.70058 2.66883C2.99232 2.36994 3.34395 2.14138 3.73431 1.99729C4.05078 1.87422 4.52905 1.72656 5.40456 1.68783C6.35396 1.64566 6.63884 1.63508 9.04037 1.63508C11.4456 1.63508 11.7303 1.64566 12.6763 1.68783C13.5554 1.72656 14.0301 1.87422 14.3466 1.99729C14.7368 2.14138 15.092 2.36994 15.3803 2.66883C15.6792 2.96071 15.9077 3.31234 16.052 3.7027C16.175 4.01917 16.3227 4.49731 16.3614 5.37295C16.4036 6.32236 16.4142 6.60709 16.4142 9.00876C16.4142 11.4104 16.4036 11.6917 16.3614 12.6411Z"
              fill="currentColor"
            />
            <path
              d="M9.03337 4.37793C6.48061 4.37793 4.40942 6.44898 4.40942 9.00188C4.40942 11.5548 6.48061 13.6258 9.03337 13.6258C11.5863 13.6258 13.6573 11.5548 13.6573 9.00188C13.6573 6.44898 11.5863 4.37793 9.03337 4.37793ZM9.03337 12.0013C7.37727 12.0013 6.03393 10.6581 6.03393 9.00188C6.03393 7.34564 7.37727 6.00244 9.03337 6.00244C10.6896 6.00244 12.0328 7.34564 12.0328 9.00188C12.0328 10.6581 10.6896 12.0013 9.03337 12.0013Z"
              fill="currentColor"
            />
            <path
              d="M14.9197 4.19521C14.9197 4.79133 14.4364 5.27469 13.8401 5.27469C13.244 5.27469 12.7606 4.79133 12.7606 4.19521C12.7606 3.59894 13.244 3.11572 13.8401 3.11572C14.4364 3.11572 14.9197 3.59894 14.9197 4.19521Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_1913_2107">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </span>
    </div>
  </Block>
);
