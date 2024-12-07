import React from 'react'

export default function Footer() {
    return (
        <div>
            {/* Footer */}
            <footer className="bg-dark text-white py-3">
                <div className="text-center">
                    &copy; {new Date().getFullYear()} InsightOS. All rights reserved.
                </div>
            </footer>
        </div>
    )
}
