import MainLayout from "../layouts/MainLayout";
import Header from "../New/Sections/Header";
import Schedule from "../New/Sections/Schedule";
import Features from "../New/Sections/Features";
import Facts from "../New/Sections/Facts";
import Services from "../New/Sections/Services";
import Portfolio from "../New/Sections/Portfolio";
import Doctors from "../New/Sections/Doctors";
import CallToAction from "../New/Sections/CallToAction";

const LandingPage = () => {
    return (
        <MainLayout>
            <Header/>
            <Schedule/>
            <Features/>
            <Facts/>
            <Services/>
            <CallToAction/>
            <Portfolio/>
            <Doctors/>
        </MainLayout>
    );
};

export default LandingPage;
