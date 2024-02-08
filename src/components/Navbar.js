import Container from 'react-bootstrap/Container';

export const Navbar = () => {
    return(
        <Container fluid className="p-0 m-0">
            <div className="top-banner w-100 d-flex justify-content-end p-2">
                <button className="logOutButton position-relative">
                    <p className="position-absolute top-50 start-50 translate-middle">Log out</p>
                </button>
            </div>
        </Container>
    )
}