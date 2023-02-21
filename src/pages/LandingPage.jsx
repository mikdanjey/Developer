import React from "react";
import { Link } from "react-router-dom";

export function LandingPage() {
    return (
        <div>
            <h1>Home Page</h1>
            <Link className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" to="/string">String Handler</Link>
        </div>
    );
}