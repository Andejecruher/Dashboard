import type React from "react"
import { Outlet } from "react-router-dom"
import Sidebard from "./Sidebard"

const BaseLayout: React.FC = () => {
    return (
        <Sidebard>
            <Outlet />
        </Sidebard>
    )
}

export default BaseLayout
