import React from 'react'

type MenuLogoProps = {
  onClick(): void
}

export const MenuLogo = ({ onClick }: MenuLogoProps) => {
  return (
  <svg onClick={onClick} width="35" height="35" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="160" height="160" rx="45" fill="#B3EDA9"/>
    <path d="M129.816 50.2098C127.105 45.5391 119.933 41.1605 101.388 46.0375C95.1982 41.7662 87.958 39.2695 80.4512 38.8176C72.9444 38.3658 65.4569 39.976 58.7996 43.4739C52.1422 46.9719 46.5685 52.2243 42.682 58.6626C38.7954 65.1008 36.744 72.4796 36.75 80C36.75 81.0313 36.7872 82.0539 36.8617 83.068C23.2406 96.6977 23.4727 105.094 26.1969 109.79C28.7578 114.207 33.8711 116.094 40.4797 116.094C44.6863 116.094 49.5031 115.329 54.6379 113.984C60.8289 118.249 68.0685 120.74 75.5732 121.188C83.0779 121.635 90.5621 120.021 97.2159 116.522C103.87 113.022 109.44 107.769 113.324 101.332C117.207 94.8948 119.257 87.5181 119.25 80C119.25 78.9645 119.211 77.9418 119.134 76.9234C125.283 70.7445 129.386 64.802 130.736 59.7359C131.947 55.2586 130.903 52.0703 129.816 50.2098ZM78 49.0625C85.0073 49.072 91.8046 51.4564 97.2822 55.8266C102.76 60.1969 106.594 66.2948 108.16 73.125C102.062 78.5949 93.8984 84.5504 83.9812 90.2523C74.6398 95.6191 65.2684 99.8602 56.8723 102.563C52.3509 98.3212 49.2081 92.8189 47.8515 86.7695C46.495 80.7202 46.9872 74.4028 49.2643 68.6365C51.5415 62.8702 55.4985 57.9211 60.6223 54.4309C65.7462 50.9407 71.8004 49.0704 78 49.0625ZM35.1129 104.617C34.8508 104.157 35.0398 101.085 39.6977 95.2883C41.1444 98.8999 43.096 102.288 45.4941 105.352C38.0906 106.473 35.3965 105.098 35.1129 104.617ZM78 110.938C74.7059 110.938 71.433 110.41 68.3063 109.373C75.4656 106.459 82.417 103.058 89.1117 99.1941C95.7813 95.3905 102.18 91.1307 108.263 86.4453C106.778 93.3719 102.964 99.5805 97.4577 104.037C91.9512 108.494 85.084 110.929 78 110.938ZM120.784 57.0762C120.234 59.1301 118.717 61.7469 116.32 64.7246C114.873 61.1082 112.92 57.7156 110.519 54.6484C117.321 53.6301 120.475 54.6484 120.896 55.3832C120.969 55.5078 121.059 56.0578 120.784 57.0762Z" fill="#105D5E"/>
  </svg>
  )
}
