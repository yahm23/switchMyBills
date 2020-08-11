import React from 'react'

export default function Loading() {
    return (
        <div className="loader">
            <svg  xmlns="http://www.w3.org/2000/svg" styles="margin: auto; background: none; display: block; shape-rendering: auto;" width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx="50" cy="50" fill="none" stroke="#D41F58" strokeWidth="4" r="41" strokeDasharray="193.20794819577225 66.40264939859075">
            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
            </circle>
            </svg>
        </div>
    )
}
