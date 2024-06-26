import Svg, { Path } from "react-native-svg"

export const geticon = (imagePath) => {
    switch (imagePath) {
        case "FingerPrint":
            return (<FingerPrint />);
        case "Refresh":
            return (<Refresh />);
        case "Account":
            return (<AccountSettings />)
        case "Search":
            return (<Search />)
        case "Transfer":
            return (<Transfer />)
        case "Withdraw":
            return (<Withdraw />)
        case "Bill":
            return (<Bill />)
        case "Twd":
            return (<Twd />)
        case "Foreign_currency":
            return (<Foreign_currency />)
        case "Credit_card":
            return (<Credit_card />)
        case "Loan":
            return (<Loan />)
        case "FM":
            return (<FM />)
        case "Discount":
            return (<Discount />)
        case "Mic":
            return (<Mic />)
        case "English":
            return (<English />)
        case "Drawer":
            return (<Drawer />)
        case "Scan":
            return (<Scan />)
        case "Transfer_Scan":
            return (<Transfer_Scan />)
        case "Notification":
            return (<Notification />)
        case "Noeye":
            return (<Noeye />)
        case "Eye":
            return (<Eye />)
        case "Arrow":
            return (<Arrow />)
        case "Add_call":
            return (<Add_call />)
        case "Water_ec":
            return (<Water_ec />)
        case "Request_page":
            return (<Request_page />)
        case "Credit_card2":
            return (<Credit_card2 />)
        case "Local_parking":
            return (<Local_parking />)
        case "Local_gas_station":
            return (<Local_gas_station />)
        case "Arrow_forward_ios":
            return (<Arrow_forward_ios />)
        case "School":
            return (<School />)
        case "Volunteer":
            return (<Volunteer />)
        case "Widgets":
            return (<Widgets />)
        case "Circle":
            return (<Circle />)
        case "Arrow_down":
            return (<Arrow_down />)
        case "Contact_support":
            return (<Contact_support />)
        case "Blue_arrow":
            return (<Blue_arrow />)
        case "Up_line":
            return (<Up_line />)
        case "Dis":
            return (<Dis />)
        case "USA":
            return (require("../img/USA.png"));
        case "Europe":
            return (require("../img/Europe.png"));
        case "China":
            return (require("../img/China.png"));
        case "Japan":
            return (require("../img/Japan.png"));
        case "Taiwan":
            return (require("../img/Taiwan.png"));
        case "HongKong":
            return (require("../img/HongKong.png"));
        case "LogOut":
            return (<LogOut />)
        case "DownBar":
            return (<Downbar />)
        case "Add":
            return (<Add />)
        case "userHead":
            return (require("./user.png"))
        case "DiscountCoin":
            return (require("./coin.png"))
        case "LeftMore":
            return (<LeftBar />)
        case "SignUpSuccess":
            return(require("./accept.png"))
        case "BuffetCard" :
            return(require("./Buffet_Card.png"))
        case "Color_transfer":
            return(require("./money-exchange.png"))
        case "Color_withdraw":
            return(require("./payment.png"))
        case "Color_payment":
            return(require("./bill.png"))
        case "Color_exchange":
            return(require("./exchange.png"))
        case "BuffetCard":
            return (require("./Buffet_Card.png"))
        case "ResetPassword":
            return (require("./resetpassword.png"))
        default:
            return null;
    }
};

const LeftBar = (props) => (
    <Svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width={40}
        height={40}
        viewBox="0 -960 960 960"
    >
        <Path
            fill="#5C94F3"
            d="m521.33-480.67-170-170q-9.66-9.66-9.33-23.33.33-13.67 10-23.33 9.67-9.67 23.67-9.67 14 0 23.66 9.67L592.67-504q5.33 5.33 7.5 11 2.16 5.67 2.16 12.33 0 6.67-2.16 12.34-2.17 5.66-7.5 11l-194 194q-9.67 9.66-23.34 9.33-13.66-.33-23.33-10-9.67-9.67-9.67-23.67 0-14 9.67-23.66l169.33-169.34Z" />
    </Svg>
)

const Add = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={100}
        height={100}
        viewBox="0 -960 960 960"
        {...props}
    >
        <Path
            fill="#D9D9D9"
            d="M440-440H240q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h200v-200q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v200h200q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H520v200q0 17-11.5 28.5T480-200q-17 0-28.5-11.5T440-240v-200Z" />
    </Svg>
)

const Downbar = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 -960 960 960"
        {...props}
    >
        <Path d="M480-360 280-560h400L480-360Z" />
    </Svg>
)

const LogOut = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 -960 960 960"
        {...props}
    >
        <Path
            fill="#fff"
            d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
    </Svg>
)


const FM = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 -960 960 960"
        {...props}
    >
        <Path d="M200-280v-280h80v280h-80Zm240 0v-280h80v280h-80ZM80-120v-80h800v80H80Zm600-160v-280h80v280h-80ZM80-640v-80l400-200 400 200v80H80Zm178-80h444-444Zm0 0h444L480-830 258-720Z" />
    </Svg>
)

const Notification = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 -960 960 960"
        {...props}
    >
        <Path
            fill="#fff"
            d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
    </Svg>
)

const Eye = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 -960 960 960"
        {...props}
    >
        <Path
            fill="#244172"
            d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
    </Svg>
)

const Noeye = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 -960 960 960"
        {...props}
    >
        <Path
            fill="#244172"
            d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" />
    </Svg>
)

const Scan = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 -960 960 960"
        {...props}
    >
        <Path
            d="M80-680v-200h200v80H160v120H80Zm0 600v-200h80v120h120v80H80Zm600 0v-80h120v-120h80v200H680Zm120-600v-120H680v-80h200v200h-80ZM700-260h60v60h-60v-60Zm0-120h60v60h-60v-60Zm-60 60h60v60h-60v-60Zm-60 60h60v60h-60v-60Zm-60-60h60v60h-60v-60Zm120-120h60v60h-60v-60Zm-60 60h60v60h-60v-60Zm-60-60h60v60h-60v-60Zm240-320v240H520v-240h240ZM440-440v240H200v-240h240Zm0-320v240H200v-240h240Zm-60 500v-120H260v120h120Zm0-320v-120H260v120h120Zm320 0v-120H580v120h120Z"
            fill="#fff"
        />
    </Svg>
)

const Transfer_Scan = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 -960 960 960"
        {...props}
    >
        <Path
            d="M80-680v-200h200v80H160v120H80Zm0 600v-200h80v120h120v80H80Zm600 0v-80h120v-120h80v200H680Zm120-600v-120H680v-80h200v200h-80ZM700-260h60v60h-60v-60Zm0-120h60v60h-60v-60Zm-60 60h60v60h-60v-60Zm-60 60h60v60h-60v-60Zm-60-60h60v60h-60v-60Zm120-120h60v60h-60v-60Zm-60 60h60v60h-60v-60Zm-60-60h60v60h-60v-60Zm240-320v240H520v-240h240ZM440-440v240H200v-240h240Zm0-320v240H200v-240h240Zm-60 500v-120H260v120h120Zm0-320v-120H260v120h120Zm320 0v-120H580v120h120Z"
            fill="black"
        />
    </Svg>
)


const Drawer = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={20}
        fill="none"
        {...props}
    >
        <Path stroke="#fff" strokeWidth={2} d="M0 10h25M0 1h25M0 19h25" />
    </Svg>
)

const English = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={18}
        fill="none"
        {...props}
    >
        <Path
            fill="#1C1B1F"
            d="M6 14h6v-2H8v-2h4V8H8V6h4V4H6v10Zm-4 4c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 0 16V2C0 1.45.196.98.588.587A1.926 1.926 0 0 1 2 0h14c.55 0 1.02.196 1.413.588C17.803.979 18 1.45 18 2v14c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 16 18H2Zm0-2h14V2H2v14Z"
        />
    </Svg>
)

const Mic = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={14}
        height={19}
        fill="none"
        {...props}
    >
        <Path
            fill="#1C1B1F"
            d="M7 12a2.893 2.893 0 0 1-2.125-.875A2.893 2.893 0 0 1 4 9V3c0-.833.292-1.542.875-2.125A2.893 2.893 0 0 1 7 0c.833 0 1.542.292 2.125.875S10 2.167 10 3v6c0 .833-.292 1.542-.875 2.125A2.893 2.893 0 0 1 7 12Zm-1 7v-3.075c-1.733-.233-3.167-1.008-4.3-2.325C.567 12.283 0 10.75 0 9h2c0 1.383.487 2.563 1.462 3.537C4.438 13.512 5.617 14 7 14s2.563-.488 3.537-1.463C11.512 11.563 12 10.383 12 9h2c0 1.75-.567 3.283-1.7 4.6-1.133 1.317-2.567 2.092-4.3 2.325V19H6Zm1-9c.283 0 .52-.096.713-.287A.968.968 0 0 0 8 9V3a.968.968 0 0 0-.287-.712A.968.968 0 0 0 7 2a.968.968 0 0 0-.713.288A.968.968 0 0 0 6 3v6c0 .283.096.52.287.713.192.191.43.287.713.287Z"
        />
    </Svg>
)

const Discount = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={16}
        fill="none"
        {...props}
    >
        <Path
            fill="#1C1B1F"
            d="M16 9V7h4v2h-4Zm1.2 7L14 13.6l1.2-1.6 3.2 2.4-1.2 1.6Zm-2-12L14 2.4 17.2 0l1.2 1.6L15.2 4ZM3 15v-4H2c-.55 0-1.02-.196-1.413-.588A1.926 1.926 0 0 1 0 9V7c0-.55.196-1.02.588-1.412A1.926 1.926 0 0 1 2 5h4l5-3v12l-5-3H5v4H3Zm6-4.55v-4.9L6.55 7H2v2h4.55L9 10.45Zm3 .9v-6.7c.45.4.813.887 1.088 1.462.275.575.412 1.205.412 1.888 0 .683-.137 1.313-.412 1.887A4.567 4.567 0 0 1 12 11.35Z"
        />
    </Svg>
)

const Loan = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={21}
        height={22}
        fill="none"
        {...props}
    >
        <Path
            fill="#1C1B1F"
            d="M18 13V6.5L13 3 8 6.5V8H6V5.5l7-5 7 5V13h-2Zm-4.5-6h1V6h-1v1Zm-2 0h1V6h-1v1Zm2 2h1V8h-1v1Zm-2 0h1V8h-1v1ZM6 17.5l6.95 1.9 5.95-1.85a1.142 1.142 0 0 0-.362-.387A.93.93 0 0 0 18 17h-5.05a9.1 9.1 0 0 1-1.075-.05 3.952 3.952 0 0 1-.825-.2l-2.325-.775.55-1.95 2.025.675c.283.083.617.15 1 .2.383.05.95.083 1.7.1a.949.949 0 0 0-.162-.525.753.753 0 0 0-.388-.325L7.6 12H6v5.5ZM0 21V10h7.6c.117 0 .233.012.35.037.117.025.225.055.325.088L14.15 12.3c.55.2.996.55 1.338 1.05.341.5.512 1.05.512 1.65h2c.833 0 1.542.275 2.125.825.583.55.875 1.275.875 2.175v1l-8 2.5-7-1.95V21H0Zm2-2h2v-7H2v7Z"
        />
    </Svg>
)



const Credit_card = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={16}
        fill="none"
        {...props}
    >
        <Path
            fill="#1C1B1F"
            d="M20 2v12c0 .55-.196 1.02-.587 1.412A1.926 1.926 0 0 1 18 16H2c-.55 0-1.02-.196-1.413-.588A1.926 1.926 0 0 1 0 14V2C0 1.45.196.98.588.587A1.926 1.926 0 0 1 2 0h16c.55 0 1.02.196 1.413.588C19.803.979 20 1.45 20 2ZM2 4h16V2H2v2Zm0 4v6h16V8H2Z"
        />
    </Svg>
)

const Refresh = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 -960 960 960"
        {...props}
    >
        <Path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z" />
    </Svg>
)



const FingerPrint = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={34}
        height={34}
        viewBox="0 -960 960 960"
        {...props}
    >
        <Path d="M481-781q106 0 200 45.5T838-604q7 9 4.5 16t-8.5 12q-6 5-14 4.5t-14-8.5q-55-78-141.5-119.5T481-741q-97 0-182 41.5T158-580q-6 9-14 10t-14-4q-7-5-8.5-12.5T126-602q62-85 155.5-132T481-781Zm0 94q135 0 232 90t97 223q0 50-35.5 83.5T688-257q-51 0-87.5-33.5T564-374q0-33-24.5-55.5T481-452q-34 0-58.5 22.5T398-374q0 97 57.5 162T604-121q9 3 12 10t1 15q-2 7-8 12t-15 3q-104-26-170-103.5T358-374q0-50 36-84t87-34q51 0 87 34t36 84q0 33 25 55.5t59 22.5q34 0 58-22.5t24-55.5q0-116-85-195t-203-79q-118 0-203 79t-85 194q0 24 4.5 60t21.5 84q3 9-.5 16T208-205q-8 3-15.5-.5T182-217q-15-39-21.5-77.5T154-374q0-133 96.5-223T481-687Zm0-192q64 0 125 15.5T724-819q9 5 10.5 12t-1.5 14q-3 7-10 11t-17-1q-53-27-109.5-41.5T481-839q-58 0-114 13.5T260-783q-8 5-16 2.5T232-791q-4-8-2-14.5t10-11.5q56-30 117-46t124-16Zm0 289q93 0 160 62.5T708-374q0 9-5.5 14.5T688-354q-8 0-14-5.5t-6-14.5q0-75-55.5-125.5T481-550q-76 0-130.5 50.5T296-374q0 81 28 137.5T406-123q6 6 6 14t-6 14q-6 6-14 6t-14-6q-59-62-90.5-126.5T256-374q0-91 66-153.5T481-590Zm-1 196q9 0 14.5 6t5.5 14q0 75 54 123t126 48q6 0 17-1t23-3q9-2 15.5 2.5T744-191q2 8-3 14t-13 8q-18 5-31.5 5.5t-16.5.5q-89 0-154.5-60T460-374q0-8 5.5-14t14.5-6Z"
            fill="#244172"
        />
    </Svg>
)

const AccountSettings = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 -960 960 960"
        {...props}
    >
        <Path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
    </Svg>
)

const Search = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 -960 960 960"
        {...props}
    >
        <Path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
    </Svg>
)


const Transfer = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={22}
        height={22}
        fill="none"
        {...props}
    >
        <Path
            fill="#1C1B1F"
            d="M11 22c-1.867 0-3.583-.425-5.15-1.275a11.144 11.144 0 0 1-3.85-3.4V20H0v-6h6v2H3.525c.8 1.2 1.854 2.167 3.163 2.9C7.995 19.633 9.433 20 11 20c1.25 0 2.42-.238 3.512-.712a9.148 9.148 0 0 0 2.85-1.925 9.148 9.148 0 0 0 1.926-2.85A8.707 8.707 0 0 0 20 11h2a10.68 10.68 0 0 1-.863 4.275 11.133 11.133 0 0 1-2.362 3.5c-1 1-2.167 1.788-3.5 2.363A10.68 10.68 0 0 1 11 22Zm-.9-4v-1.3c-.783-.183-1.42-.52-1.912-1.012S7.332 14.55 7.1 13.75l1.65-.65c.2.683.512 1.196.938 1.537.425.342.912.513 1.462.513.55 0 1.02-.13 1.412-.388.392-.258.588-.662.588-1.212 0-.483-.204-.875-.613-1.175-.408-.3-1.137-.642-2.187-1.025-.983-.35-1.704-.767-2.162-1.25-.459-.483-.688-1.117-.688-1.9 0-.683.237-1.304.713-1.862.475-.559 1.12-.921 1.937-1.088V4h1.75v1.25c.6.05 1.146.292 1.637.725.492.433.83.942 1.013 1.525l-1.6.65a2.2 2.2 0 0 0-.65-.963c-.3-.258-.717-.387-1.25-.387-.583 0-1.03.125-1.338.375-.308.25-.462.592-.462 1.025 0 .433.192.775.575 1.025.383.25 1.075.542 2.075.875 1.2.433 2 .942 2.4 1.525.4.583.6 1.225.6 1.925 0 .483-.083.908-.25 1.275-.167.367-.388.68-.662.938a3.305 3.305 0 0 1-.963.624c-.367.159-.758.28-1.175.363V18H10.1ZM0 11c0-1.517.287-2.942.863-4.275a11.133 11.133 0 0 1 2.362-3.5c1-1 2.167-1.788 3.5-2.362A10.68 10.68 0 0 1 11 0c1.867 0 3.583.425 5.15 1.275 1.567.85 2.85 1.983 3.85 3.4V2h2v6h-6V6h2.475c-.8-1.2-1.854-2.167-3.163-2.9C14.005 2.367 12.567 2 11 2c-1.25 0-2.42.237-3.513.712a9.148 9.148 0 0 0-2.85 1.925 9.148 9.148 0 0 0-1.924 2.85A8.707 8.707 0 0 0 2 11H0Z"
        />
    </Svg>
)


const Withdraw = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={16}
        fill="none"
        {...props}
    >
        <Path
            fill="#1C1B1F"
            d="M9 13h2v-1h1c.283 0 .52-.096.713-.287A.968.968 0 0 0 13 11V8a.967.967 0 0 0-.287-.713A.968.968 0 0 0 12 7H9V6h4V4h-2V3H9v1H8a.968.968 0 0 0-.713.287A.968.968 0 0 0 7 5v3c0 .283.096.52.287.713.192.191.43.287.713.287h3v1H7v2h2v1Zm-7 3c-.55 0-1.02-.196-1.413-.588A1.926 1.926 0 0 1 0 14V2C0 1.45.196.98.588.587A1.926 1.926 0 0 1 2 0h16c.55 0 1.02.196 1.413.588C19.803.979 20 1.45 20 2v12c0 .55-.196 1.02-.587 1.412A1.926 1.926 0 0 1 18 16H2Zm0-2h16V2H2v12Z"
        />
    </Svg>
)

const Bill = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={20}
        fill="none"
        {...props}
    >
        <Path
            fill="#1C1B1F"
            d="M3 20a2.893 2.893 0 0 1-2.125-.875A2.893 2.893 0 0 1 0 17v-3h3V0l1.5 1.5L6 0l1.5 1.5L9 0l1.5 1.5L12 0l1.5 1.5L15 0l1.5 1.5L18 0v17c0 .833-.292 1.542-.875 2.125A2.893 2.893 0 0 1 15 20H3Zm12-2c.283 0 .52-.096.713-.288A.968.968 0 0 0 16 17V3H5v11h9v3c0 .283.096.52.287.712.192.192.43.288.713.288ZM6 7V5h6v2H6Zm0 3V8h6v2H6Zm8-3a.968.968 0 0 1-.713-.287A.967.967 0 0 1 13 6c0-.283.096-.52.287-.713A.968.968 0 0 1 14 5c.283 0 .52.096.713.287.191.192.287.43.287.713s-.096.52-.287.713A.968.968 0 0 1 14 7Zm0 3a.968.968 0 0 1-.713-.287A.967.967 0 0 1 13 9c0-.283.096-.52.287-.713A.968.968 0 0 1 14 8c.283 0 .52.096.713.287.191.192.287.43.287.713s-.096.52-.287.713A.968.968 0 0 1 14 10ZM3 18h9v-2H2v1c0 .283.096.52.288.712.191.192.429.288.712.288Z"
        />
    </Svg>
)

const Twd = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="none"
        {...props}
    >
        <Path
            fill="#1C1B1F"
            d="M9.1 17h1.75v-1.25c.833-.15 1.55-.475 2.15-.975.6-.5.9-1.242.9-2.225 0-.7-.2-1.342-.6-1.925-.4-.583-1.2-1.092-2.4-1.525-1-.333-1.692-.625-2.075-.875-.383-.25-.575-.592-.575-1.025 0-.433.154-.775.463-1.025.308-.25.754-.375 1.337-.375.533 0 .95.13 1.25.388.3.258.517.579.65.962l1.6-.65a3.349 3.349 0 0 0-1.013-1.525C12.046 4.542 11.5 4.3 10.9 4.25V3H9.15v1.25c-.833.183-1.483.55-1.95 1.1-.467.55-.7 1.167-.7 1.85 0 .783.23 1.417.688 1.9.458.483 1.179.9 2.162 1.25 1.05.383 1.78.725 2.188 1.025.408.3.612.692.612 1.175 0 .55-.196.954-.588 1.212-.391.259-.862.388-1.412.388-.55 0-1.037-.17-1.463-.513-.425-.341-.737-.854-.937-1.537l-1.65.65c.233.8.596 1.446 1.088 1.938.491.491 1.129.829 1.912 1.012V17Zm.9 3a9.738 9.738 0 0 1-3.9-.788 10.099 10.099 0 0 1-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.738 9.738 0 0 1 0 10c0-1.383.263-2.683.787-3.9a10.099 10.099 0 0 1 2.138-3.175c.9-.9 1.958-1.612 3.175-2.137A9.738 9.738 0 0 1 10 0c1.383 0 2.683.263 3.9.787a10.098 10.098 0 0 1 3.175 2.138c.9.9 1.613 1.958 2.137 3.175A9.738 9.738 0 0 1 20 10a9.738 9.738 0 0 1-.788 3.9 10.098 10.098 0 0 1-2.137 3.175c-.9.9-1.958 1.613-3.175 2.137A9.738 9.738 0 0 1 10 20Zm0-2c2.233 0 4.125-.775 5.675-2.325C17.225 14.125 18 12.233 18 10c0-2.233-.775-4.125-2.325-5.675C14.125 2.775 12.233 2 10 2c-2.233 0-4.125.775-5.675 2.325C2.775 5.875 2 7.767 2 10c0 2.233.775 4.125 2.325 5.675C5.875 17.225 7.767 18 10 18Z"
        />
    </Svg>
)

const Foreign_currency = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={18}
        fill="none"
        {...props}
    >
        <Path
            fill="#1C1B1F"
            d="M12 18c-1.967 0-3.717-.558-5.25-1.675S4.133 13.767 3.5 12H0v-2h3.05A2.817 2.817 0 0 1 3 9.5v-1c0-.15.017-.317.05-.5H0V6h3.5c.633-1.767 1.717-3.208 3.25-4.325S10.033 0 12 0c1.15 0 2.238.2 3.262.6C16.288 1 17.2 1.567 18 2.3l-1.75 1.75a6.872 6.872 0 0 0-1.963-1.137A6.395 6.395 0 0 0 12 2.5c-1.25 0-2.387.32-3.412.962A6.335 6.335 0 0 0 6.25 6H12v2H5.6a7.37 7.37 0 0 0-.075.5c-.017.15-.025.317-.025.5s.008.35.025.5c.017.15.042.317.075.5H12v2H6.25a6.336 6.336 0 0 0 2.338 2.537c1.025.642 2.162.963 3.412.963.8 0 1.57-.137 2.313-.412a6.13 6.13 0 0 0 1.937-1.138L18 15.7c-.8.733-1.712 1.3-2.738 1.7-1.024.4-2.112.6-3.262.6Z"
        />
    </Svg>
)

const Arrow = (props) => (
    <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path d="M17.885 3.77L16.115 2L6.11501 12L16.115 22L17.885 20.23L9.65501 12L17.885 3.77Z" fill="white" />
    </Svg>
)

const Add_call = (props) => (
    <Svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path d="M32.6 21.8V15.4H26.2V12.4H32.6V6H35.6V12.4H42V15.4H35.6V21.8H32.6ZM39.75 42C35.8833 42 31.9417 41.0667 27.925 39.2C23.9083 37.3333 20.1833 34.6833 16.75 31.25C13.3167 27.8167 10.6667 24.0917 8.8 20.075C6.93333 16.0583 6 12.1167 6 8.25C6 7.60713 6.21428 7.07142 6.64285 6.64285C7.07142 6.21428 7.60713 6 8.25 6H15.25C15.7167 6 16.1167 6.16667 16.45 6.5C16.7833 6.83333 17.0167 7.25 17.15 7.75L18.4964 14.0321C18.5655 14.5107 18.5583 14.9417 18.475 15.325C18.3917 15.7083 18.2128 16.0371 17.9385 16.3113L12.95 21.35C13.8167 22.8167 14.7333 24.1833 15.7 25.45C16.6667 26.7167 17.7333 27.9167 18.9 29.05C20.1333 30.3167 21.4333 31.475 22.8 32.525C24.1667 33.575 25.6 34.5 27.1 35.3L31.85 30.4C32.1833 30.0333 32.5692 29.7833 33.0076 29.65C33.4459 29.5167 33.8767 29.4833 34.3 29.55L40.25 30.85C40.75 30.9833 41.1667 31.2507 41.5 31.6522C41.8333 32.0537 42 32.5029 42 33V39.75C42 40.3929 41.7857 40.9286 41.3572 41.3572C40.9286 41.7857 40.3929 42 39.75 42ZM11.45 18.6L15.5 14.5L14.35 9H9C9.06667 10.4 9.29167 11.875 9.675 13.425C10.0583 14.975 10.65 16.7 11.45 18.6ZM29.9 36.75C31.2667 37.3833 32.75 37.9 34.35 38.3C35.95 38.7 37.5 38.9333 39 39V33.65L33.85 32.6L29.9 36.75Z" fill="#1C1B1F" />
    </Svg>
)

const Water_ec = (props) => (
    <Svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path d="M22.5 35.5H23.75L31.05 24.5H25.5V16.5H24.25L16.95 27.5H22.5V35.5ZM24 44C19.4333 44 15.625 42.4333 12.575 39.3C9.525 36.1667 8 32.2667 8 27.6C8 24.2667 9.325 20.6417 11.975 16.725C14.625 12.8083 18.6333 8.56667 24 4C29.3667 8.56667 33.375 12.8083 36.025 16.725C38.675 20.6417 40 24.2667 40 27.6C40 32.2667 38.475 36.1667 35.425 39.3C32.375 42.4333 28.5667 44 24 44ZM24 41C27.7333 41 30.8333 39.725 33.3 37.175C35.7667 34.625 37 31.4333 37 27.6C37 24.9667 35.8917 21.975 33.675 18.625C31.4583 15.275 28.2333 11.7333 24 8C19.7667 11.7333 16.5417 15.275 14.325 18.625C12.1083 21.975 11 24.9667 11 27.6C11 31.4333 12.2333 34.625 14.7 37.175C17.1667 39.725 20.2667 41 24 41Z" fill="#1C1B1F" />
    </Svg>
)

const Request_page = (props) => (
    <Svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path d="M22.5 36H25.5V34H28.5C28.925 34 29.2812 33.8563 29.5688 33.5688C29.8563 33.2812 30 32.925 30 32.5V26C30 25.575 29.8563 25.2188 29.5688 24.9312C29.2812 24.6437 28.925 24.5 28.5 24.5H21V21H30V18H25.5V16H22.5V18H19.5C19.075 18 18.7188 18.1438 18.4313 18.4313C18.1438 18.7188 18 19.075 18 19.5V26C18 26.425 18.1438 26.7812 18.4313 27.0688C18.7188 27.3563 19.075 27.5 19.5 27.5H27V31H18V34H22.5V36ZM11 44C10.2 44 9.5 43.7 8.9 43.1C8.3 42.5 8 41.8 8 41V7C8 6.2 8.3 5.5 8.9 4.9C9.5 4.3 10.2 4 11 4H28.05L40 15.95V41C40 41.8 39.7 42.5 39.1 43.1C38.5 43.7 37.8 44 37 44H11ZM11 41H37V17.3L26.7 7H11V41Z" fill="#1C1B1F" />
    </Svg>
)

const Credit_card2 = (props) => (
    <Svg width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path d="M44 11V37C44 37.8 43.7 38.5 43.1 39.1C42.5 39.7 41.8 40 41 40H7C6.2 40 5.5 39.7 4.9 39.1C4.3 38.5 4 37.8 4 37V11C4 10.2 4.3 9.5 4.9 8.9C5.5 8.3 6.2 8 7 8H41C41.8 8 42.5 8.3 43.1 8.9C43.7 9.5 44 10.2 44 11ZM7 16.45H41V11H7V16.45ZM7 22.9V37H41V22.9H7Z" fill="#1C1B1F" />
    </Svg>
)

const Local_parking = (props) => (
    <Svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path d="M12 42V6H26.4C29.6667 6 32.4167 7.11667 34.65 9.35C36.8833 11.5833 38 14.3333 38 17.6C38 20.8667 36.8833 23.6167 34.65 25.85C32.4167 28.0833 29.6667 29.2 26.4 29.2H18V42H12ZM18 23.2H26.4C28 23.2 29.3333 22.6667 30.4 21.6C31.4667 20.5333 32 19.2 32 17.6C32 16 31.4667 14.6667 30.4 13.6C29.3333 12.5333 28 12 26.4 12H18V23.2Z" fill="#1C1B1F" />
    </Svg>

)

const Local_gas_station = (props) => (
    <Svg
        width="48"
        height="48" v
        iewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path d="M8 42V9C8 8.2 8.3 7.5 8.9 6.9C9.5 6.3 10.2 6 11 6H24.45C25.25 6 25.95 6.3 26.55 6.9C27.15 7.5 27.45 8.2 27.45 9V23.4H30.7C31.3875 23.4 31.976 23.6448 32.4656 24.1344C32.9552 24.624 33.2 25.2125 33.2 25.9V36.85C33.2 37.5725 33.4583 38.1781 33.975 38.6669C34.4917 39.1556 35.1167 39.4 35.85 39.4C36.5833 39.4 37.2083 39.1556 37.725 38.6669C38.2417 38.1781 38.5 37.5725 38.5 36.85V22.1C38.1333 22.3 37.75 22.45 37.35 22.55C36.95 22.65 36.55 22.7 36.15 22.7C34.834 22.7 33.7217 22.2457 32.813 21.337C31.9043 20.4283 31.45 19.316 31.45 18C31.45 16.9462 31.75 15.9994 32.35 15.1596C32.95 14.3199 33.75 13.7667 34.75 13.5L30 8.75L31.8 7L39.45 14.65C39.9167 15.1167 40.2917 15.625 40.575 16.175C40.8583 16.725 41 17.3333 41 18V36.85C41 38.292 40.503 39.5108 39.5091 40.5065C38.5152 41.5022 37.2986 42 35.8591 42C34.4197 42 33.2 41.5022 32.2 40.5065C31.2 39.5108 30.7 38.292 30.7 36.85V25.9H27.45V42H8ZM11 20.4H24.45V9H11V20.4ZM36.15 20.2C36.75 20.2 37.2667 19.9833 37.7 19.55C38.1333 19.1167 38.35 18.6 38.35 18C38.35 17.4 38.1333 16.8833 37.7 16.45C37.2667 16.0167 36.75 15.8 36.15 15.8C35.55 15.8 35.0333 16.0167 34.6 16.45C34.1667 16.8833 33.95 17.4 33.95 18C33.95 18.6 34.1667 19.1167 34.6 19.55C35.0333 19.9833 35.55 20.2 36.15 20.2ZM11 39H24.45V23.4H11V39Z" fill="#1C1B1F" />
    </Svg>
)

const Arrow_forward_ios = (props) => (
    <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path d="M6.11499 20.23L7.88499 22L17.885 12L7.88499 2L6.11499 3.77L14.345 12L6.11499 20.23Z" fill="black" />
    </Svg>
)

const School = (props) => (
    <Svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path d="M23.95 42L9.45 34.05V22.05L2 18L23.95 6L46 18V33.85H43V19.75L38.45 22.05V34.05L23.95 42ZM23.95 26.6L39.7 18L23.95 9.55L8.3 18L23.95 26.6ZM23.95 38.6L35.45 32.25V23.85L23.95 30L12.45 23.75V32.25L23.95 38.6Z" fill="#1C1B1F" />
    </Svg>
)

const Volunteer = (props) => (
    <Svg
        width="49"
        height="49"
        viewBox="0 0 49 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path d="M32.4848 25.4165L24.2848 17.4165C23.3075 16.4918 22.4798 15.467 21.8018 14.342C21.1238 13.217 20.7848 11.9918 20.7848 10.6665C20.7848 8.89981 21.3681 7.38314 22.5348 6.11647C23.7015 4.84981 25.1515 4.21647 26.8848 4.21647C28.0181 4.21647 29.0515 4.50814 29.9848 5.09147C30.9181 5.67481 31.7515 6.39981 32.4848 7.26647C33.2181 6.39981 34.0515 5.67481 34.9848 5.09147C35.9181 4.50814 36.9515 4.21647 38.0848 4.21647C39.8181 4.21647 41.2681 4.84981 42.4348 6.11647C43.6015 7.38314 44.1848 8.89981 44.1848 10.6665C44.1848 11.9885 43.8432 13.2106 43.1598 14.333C42.4765 15.4553 41.6515 16.4831 40.6848 17.4165L32.4848 25.4165ZM32.4848 21.2665L38.4848 15.3165C39.1555 14.6548 39.7731 13.9495 40.3378 13.2005C40.9025 12.4515 41.1848 11.6068 41.1848 10.6665C41.1848 9.73314 40.8931 8.92481 40.3098 8.24147C39.7265 7.55814 38.9848 7.21647 38.0848 7.21647C37.4181 7.21647 36.8015 7.39981 36.2348 7.76647C35.6681 8.13314 35.1681 8.58314 34.7348 9.11647L32.4848 11.8665L30.2348 9.11647C29.8015 8.58314 29.3015 8.13314 28.7348 7.76647C28.1681 7.39981 27.5515 7.21647 26.8848 7.21647C25.9848 7.21647 25.2431 7.55814 24.6598 8.24147C24.0765 8.92481 23.7848 9.73314 23.7848 10.6665C23.7848 11.6068 24.0671 12.4515 24.6318 13.2005C25.1965 13.9495 25.8141 14.6548 26.4848 15.3165L32.4848 21.2665ZM12.9348 38.2165L28.2848 42.7165L40.6848 38.8165C40.6848 38.1498 40.4265 37.5915 39.9098 37.1415C39.3932 36.6915 38.7848 36.4665 38.0848 36.4665H27.6348C27.1015 36.4665 26.5765 36.4248 26.0598 36.3415C25.5431 36.2581 25.0348 36.1331 24.5348 35.9665L19.7348 34.5165L20.6848 31.4665L25.3848 33.0665C25.7515 33.1998 26.1265 33.2998 26.5098 33.3665C26.8931 33.4331 27.2681 33.4665 27.6348 33.4665H30.4348C30.4348 32.7665 30.2015 32.1581 29.7348 31.6415C29.2681 31.1248 28.7015 30.7331 28.0348 30.4665L17.1348 26.3165H12.9348V38.2165ZM2.18481 44.2165V23.3165H17.0848C17.2625 23.3165 17.4403 23.3331 17.6183 23.3665C17.796 23.3998 17.9681 23.4498 18.1348 23.5165L29.0348 27.6165C30.3015 28.0831 31.3765 28.8331 32.2598 29.8665C33.1431 30.8998 33.5848 32.0998 33.5848 33.4665H38.0848C39.7791 33.4665 41.2195 34.0831 42.4058 35.3165C43.5918 36.5498 44.1848 38.0165 44.1848 39.7165V41.0165L28.5348 45.8165L12.9348 41.3665V44.2165H2.18481ZM5.18481 41.2165H9.88481V26.3165H5.18481V41.2165Z" fill="#1C1B1F" />
    </Svg>
)

const Widgets = (props) => (
    <Svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path d="M33.95 24.7L23.3 14.05L33.95 3.4L44.6 14.05L33.95 24.7ZM6 21.1V6.05H21.05V21.1H6ZM26.9 42V26.95H41.95V42H26.9ZM6 42V26.95H21.05V42H6ZM9 18.1H18.05V9.05H9V18.1ZM34.1 20.65L40.55 14.2L34.1 7.75L27.65 14.2L34.1 20.65ZM29.9 39H38.95V29.95H29.9V39ZM9 39H18.05V29.95H9V39Z" fill="#1C1B1F" />
    </Svg>
)

const Circle = (props) => (
    <Svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path d="M31.8 49.8L52.95 28.65L48.75 24.45L31.8 41.4L23.25 32.85L19.05 37.05L31.8 49.8ZM36 66C31.85 66 27.95 65.2125 24.3 63.6375C20.65 62.0625 17.475 59.925 14.775 57.225C12.075 54.525 9.93747 51.35 8.36247 47.7C6.78747 44.05 5.99997 40.15 5.99997 36C5.99997 31.85 6.78747 27.95 8.36247 24.3C9.93747 20.65 12.075 17.475 14.775 14.775C17.475 12.075 20.65 9.9375 24.3 8.3625C27.95 6.7875 31.85 6 36 6C40.15 6 44.05 6.7875 47.7 8.3625C51.35 9.9375 54.525 12.075 57.225 14.775C59.925 17.475 62.0625 20.65 63.6375 24.3C65.2125 27.95 66 31.85 66 36C66 40.15 65.2125 44.05 63.6375 47.7C62.0625 51.35 59.925 54.525 57.225 57.225C54.525 59.925 51.35 62.0625 47.7 63.6375C44.05 65.2125 40.15 66 36 66ZM36 60C42.7 60 48.375 57.675 53.025 53.025C57.675 48.375 60 42.7 60 36C60 29.3 57.675 23.625 53.025 18.975C48.375 14.325 42.7 12 36 12C29.3 12 23.625 14.325 18.975 18.975C14.325 23.625 12 29.3 12 36C12 42.7 14.325 48.375 18.975 53.025C23.625 57.675 29.3 60 36 60Z" fill="#66AF47" />
    </Svg>
)

const Arrow_down = (props) => (
    <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path d="M3.77 6.11499L2 7.88499L12 17.885L22 7.88499L20.23 6.11499L12 14.345L3.77 6.11499Z" fill="#5C94F3" />
    </Svg>
)

const Contact_support = (props) => (
    <Svg
        width="26"
        height="26"
        viewBox="0 0 26 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path d="M14.3506 30.0832L13.986 25.9513H12.8922C9.42481 25.9513 6.47168 24.7319 4.03287 22.2931C1.59429 19.8545 0.375 16.9014 0.375 13.4337C0.375 9.96631 1.59842 7.01319 4.04526 4.57437C6.49186 2.13579 9.45714 0.916504 12.9411 0.916504C14.6668 0.916504 16.2689 1.23041 17.7474 1.85822C19.2259 2.48628 20.5181 3.36128 21.624 4.48322C22.7299 5.60541 23.5969 6.92204 24.2249 8.43312C24.8528 9.94395 25.1667 11.5865 25.1667 13.3608C25.1667 15.0379 24.9094 16.6907 24.3948 18.3192C23.8805 19.9476 23.1514 21.487 22.2073 22.9373C21.2636 24.3877 20.1253 25.7204 18.7927 26.9357C17.4597 28.151 15.979 29.2002 14.3506 30.0832ZM16.5381 25.6837C18.4422 24.0796 19.9512 22.194 21.0651 20.0269C22.179 17.8595 22.736 15.6375 22.736 13.3608C22.736 10.4685 21.8023 8.07644 19.9349 6.18473C18.0675 4.29303 15.7362 3.34718 12.9411 3.34718C10.1134 3.34718 7.71722 4.32949 5.7526 6.29411C3.78799 8.25873 2.80568 10.6386 2.80568 13.4337C2.80568 16.2289 3.78799 18.6089 5.7526 20.5737C7.71722 22.5384 10.0971 23.5207 12.8922 23.5207H16.5381V25.6837ZM12.9287 21.7342C13.3259 21.7342 13.6621 21.5965 13.9375 21.3211C14.2129 21.0455 14.3506 20.7092 14.3506 20.3123C14.3506 19.9154 14.2129 19.5792 13.9375 19.3035C13.6621 19.0282 13.3259 18.8905 12.9287 18.8905C12.5318 18.8905 12.1956 19.0282 11.9203 19.3035C11.6446 19.5792 11.5068 19.9154 11.5068 20.3123C11.5068 20.7092 11.6446 21.0455 11.9203 21.3211C12.1956 21.5965 12.5318 21.7342 12.9287 21.7342ZM11.9203 16.8853H13.8646C13.8646 16.237 13.9578 15.7306 14.1442 15.366C14.3304 15.0015 14.7719 14.4709 15.4688 13.7743C16.0521 13.1909 16.4814 12.6319 16.7568 12.0972C17.0324 11.5625 17.1703 10.9871 17.1703 10.3712C17.1703 9.22888 16.7833 8.31949 16.0094 7.64307C15.2358 6.96664 14.2453 6.62843 13.0381 6.62843C12.0012 6.62843 11.0939 6.90588 10.3161 7.46078C9.53832 8.01567 8.97115 8.74277 8.61458 9.64208L10.4131 10.3712C10.6318 9.81222 10.9559 9.36463 11.3854 9.02848C11.8149 8.69234 12.3415 8.52426 12.9652 8.52426C13.67 8.52426 14.2149 8.70243 14.5999 9.05874C14.9847 9.41531 15.1771 9.86095 15.1771 10.3957C15.1771 10.8412 15.0474 11.2766 14.7881 11.702C14.529 12.1273 14.1158 12.6317 13.5485 13.215C12.8276 13.9118 12.376 14.4689 12.1937 14.8862C12.0114 15.3033 11.9203 15.9697 11.9203 16.8853Z" fill="#1C1B1F" />
    </Svg>
)

const Blue_arrow = (props) => (
    <Svg
        width="18"
        height="18"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path d="M3.56708 11.8009L4.59958 12.8334L10.4329 7.00008L4.59958 1.16675L3.56708 2.19925L8.36791 7.00008L3.56708 11.8009Z" fill="#5C94F3" />
    </Svg>
)

const Dis = (props) => (
    <Svg
        width="25"
        height="25"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path d="M26.4932 18.7153V16.285H32.0833V18.7153H26.4932ZM28.2917 29.1668L23.7953 25.8127L25.2536 23.8683L29.75 27.2225L28.2917 29.1668ZM25.3265 11.1079L23.8682 9.16324L28.2917 5.8335L29.75 7.77782L25.3265 11.1079ZM7.53483 27.7085V21.8752H5.34733C4.67893 21.8752 4.10666 21.6372 3.63051 21.1613C3.15461 20.6852 2.91666 20.1129 2.91666 19.4445V15.5558C2.91666 14.8874 3.15461 14.3152 3.63051 13.839C4.10666 13.3631 4.67893 13.1252 5.34733 13.1252H11.6667L18.9583 8.75016V26.2502L11.6667 21.8752H9.96515V27.7085H7.53483ZM16.5276 21.9481V13.0522L12.3229 15.5558H5.34733V19.4445H12.3229L16.5276 21.9481ZM20.4167 22.3856V12.6147C21.0729 13.1981 21.6016 13.909 22.0026 14.7476C22.4036 15.5861 22.6042 16.5036 22.6042 17.5002C22.6042 18.4967 22.4036 19.4142 22.0026 20.2528C21.6016 21.0913 21.0729 21.8022 20.4167 22.3856Z" fill="#1C1B1F" />
    </Svg>
)

const Up_line = (props) => (
    <Svg
        width="24"
        height="24"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path d="M6.80568 30.625C6.14943 30.625 5.58019 30.384 5.09797 29.902C4.61599 29.4198 4.375 28.8506 4.375 28.1943V6.80568C4.375 6.14943 4.61599 5.58019 5.09797 5.09797C5.58019 4.61599 6.14943 4.375 6.80568 4.375H28.1943C28.8506 4.375 29.4198 4.61599 29.902 5.09797C30.384 5.58019 30.625 6.14943 30.625 6.80568V28.1943C30.625 28.8506 30.384 29.4198 29.902 29.902C29.4198 30.384 28.8506 30.625 28.1943 30.625H6.80568ZM6.80568 24.5244V28.1943H28.1943V15.2881L19.2256 24.6458L12.9547 18.375L6.80568 24.5244ZM6.80568 21.0729L12.9547 14.9235L19.1771 21.1458L28.1943 11.764V6.80568H6.80568V21.0729ZM6.80568 15.2881V11.764V21.1458V14.9235V24.5244V18.375V24.6458V15.2881ZM6.80568 21.0729V6.80568V21.1458V14.9235V21.0729ZM6.80568 24.5244V18.375V24.6458V15.2881V28.1943V24.5244Z" fill="#1C1B1F" />
    </Svg>
)