import React from "react";
import "../style/pages/profile.css"
export default function Profile() {
    return (
        <div className="profile-container">
            <h1 className="profile-title">My Profile</h1>
            <div className="profile-details">
                <p><strong>Name:</strong> Yassine Echadani</p>
                <p><strong>Role:</strong> Full Stack Developer</p>
                <p><strong>Email:</strong> yassinechadani113@gmail.com</p>
                <p><strong>Phone:</strong> +212601710479</p>
            </div>
        </div>
    );
}
