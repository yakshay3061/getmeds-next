'use client'

export default function SidebarMenuShow() {


  const showSidebar =  () => {
    const sidebar = document.querySelector('.home-header-sidebar');
    sidebar.style.display = 'flex';
  };


  return (
    <div>
      <svg
        onClick={showSidebar}
        class="menu-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="12"
        viewBox="0 0 18 12"
        fill="none"
      >
        <path
          d="M0 12V10H18V12H0ZM0 7V5H18V7H0ZM0 2V0H18V2H0Z"
          fill="#1C1B1F"
        />
      </svg>
    </div>
  );
}
