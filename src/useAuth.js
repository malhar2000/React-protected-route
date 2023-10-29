import { useSelector } from "react-redux";

export default function useAuth() {

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const role = useSelector(state => state.auth.role);

    return { isAuthenticated, role };
}
