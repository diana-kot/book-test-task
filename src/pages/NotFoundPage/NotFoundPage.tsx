import { useLocation } from 'react-router';

import './NotFoundPage.css';

function NotFoundPage() {
    let location = useLocation();
    return (
        <>
            <section className="section-error">
                <div className="container center section-error__container">
                    <div className="section-error__content">
                        <p className="section-error__text">
                            NO match for <u>{location.pathname}</u>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default NotFoundPage;
