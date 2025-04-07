// import React from 'react'

// export default function Footer() {
//   return (
//     <div
//   style={{ fontFamily: "Poppins" }}
//   className="flex justify-center  py-4 px-4 text-center mt-[.5vh]"
// >
//   <span className="bg-gradient-to-r from-[#302f2f] to-[#121212] font px-3 py-2 text-[10px] sm:text-[10px] md:text-[11px] text-white">
//     Copyright © 2025, Steve Warui All rights reserved
   
//   </span>
// </div>  )
// }
export default function Footer() {
  return (
    <footer
      className="w-full bottom-0 mt-4 left-0 right-0 flex justify-center py-4 px-4 text-center"
      style={{
        fontFamily: "Poppins",
        marginBottom: 0,
        paddingBottom: 0,
      }}
    >
      <span className="bg-black text-white px-3 py-1 text-[10px] sm:text-[10px] md:text-[11px]">
       Copyright © 2025, Steve Warui All rights reserved
      
      </span>
    </footer>
  )
}

