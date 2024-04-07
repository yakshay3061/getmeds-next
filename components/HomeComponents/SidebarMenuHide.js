'use client'


export default function SidebarMenuHide() {

    const HideSidebar = () => {
        const sidebar = document.querySelector('.home-header-sidebar');
    sidebar.style.display = 'none';
    }

    // window.addEventListener("scroll", HideSidebar);

    return(
        <div>
            <svg
            onClick={HideSidebar}

            class="cross-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </div>
    );
}