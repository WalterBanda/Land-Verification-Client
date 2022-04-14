import {Builder} from "../components";
import {useRouter} from "next/router";

function Index() {
    const router = useRouter()
    if (typeof (window) !== "undefined") {
        setTimeout(() => {
            router.push("/home").then(() => {
            })
        }, 1000);
    }
    return (
        <Builder>
            <p>Redirecting...</p>
        </Builder>
    );
}

export default Index;
