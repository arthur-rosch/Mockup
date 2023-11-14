import { Banner } from "../../components/Home/Banner";
import { Companies } from "../../components/Home/Companies";
import { Course } from "../../components/Home/Course";

export function Home() {
    return(
        <div>
            <Banner/>
            <Companies/>
            <Course/>
            <h1>Home</h1>
        </div>
    )
}