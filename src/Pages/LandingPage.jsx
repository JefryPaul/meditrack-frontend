import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";


function LandingPage() {
    return (
        <>
            <section
                style={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    overflow: "hidden",
                    backgroundColor: "#f8f9fa",
                    flexDirection: "row",
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        pl: { xs: 4, md: 10 },
                        pr: { xs: 4, md: 6 },
                        zIndex: 2,
                    }}
                >
                    <Typography
                        variant="subtitle1"
                        sx={{
                            color: "#2a9d8f",
                            fontWeight: 600,
                            mb: 2,
                        }}
                    >
                        Medical Supply Management System
                    </Typography>

                    <Typography
                        variant="h4"
                        sx={{
                            color: "#1a202c",
                            fontWeight: 500,
                            lineHeight: 1.3,
                            maxWidth: { xs: "100%", md: "600px" },
                        }}
                    >
                        “MediTrack - Your Medical Inventory Made Simple” <br />
                        “Keep track of medicines, stock levels, and expiry dates effortlessly”
                    </Typography>

                    <Box sx={{ mt: 4 }}>
                        <Link to="view">
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "#2a9d8f",
                                    color: "white",
                                    borderRadius: "30px",
                                    px: 4,
                                    py: 1.5,
                                    textTransform: "none",
                                    fontSize: "1rem",
                                    "&:hover": { backgroundColor: "#238b7a" },
                                }}
                            >
                                Get Started
                            </Button>
                        </Link>
                    </Box>
                </Box>

                <Box
                    sx={{
                        flex: 1.5,
                        height: "100%",
                        backgroundImage: `linear-gradient(rgba(42,157,143,0.65), rgba(42,157,143,0.65)), url('https://www.eturns.com/media/kkejjqbn/medical-practice-eturns.png?width=1400&height=700&v=1dbfdacb47d3bb0')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        clipPath: { xs: "none", md: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)" },
                        zIndex: 1,
                        display: { xs: "none", md: "block" },
                    }}
                ></Box>
            </section>






            <section className="container">
                <h1 className="text-center p-5 fw-bold" style={{ color: "#2a9d8f" }}>Features</h1>
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 p-5" style={{ color: "#2a9d8f" }}>
                        <h4>Manage Medicines</h4>
                        <p>
                            Add, view, edit, or delete medicine records easily. Keep all essential details like expiry date, supplier, and price organized.
                        </p>

                        <h4>Select & Download Medicines</h4>
                        <p>
                            Users can select the medicines they need and download the selected list as a document for easy access and sharing.
                        </p>

                        <h4>Inventory & History Tracking</h4>
                        <p>
                            Track download history for all selected medicines
                        </p>

                        <h4>JSON-Server Backend</h4>
                        <p>
                            Your data is safely stored in JSON Server, and all updates sync seamlessly with the JSON server backend
                        </p>
                    </div>


                    <div className="col-12 col-md-6 text-center">
                        <img
                            className="w-75 rounded shadow"
                            src="https://img.freepik.com/free-vector/pharmacist_23-2148183180.jpg?semt=ais_incoming&w=740&q=80"
                            alt="Medical Inventory"
                        />
                    </div>
                </div>
            </section>

            <section
                style={{
                    width: "100%",
                    overflowX: "hidden",
                    height: "400px",
                    backgroundImage:
                        "url('https://www.bigscal.com/wp-content/uploads/2023/12/How-Clinic-Inventory-Management-System-Helps-Healthcare-Providers.webp')",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                    backgroundPosition: "center",
                }}
            >
                <div
                    style={{
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                    }}
                    className="d-flex justify-content-center align-items-center"
                >
                    <h2 className="text-white text-center px-3">
                        “Your one-stop solution for efficient and organized medical supply
                        management.”
                    </h2>
                </div>
            </section>
        </>
    );
}

export default LandingPage;
