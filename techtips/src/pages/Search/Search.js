//hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";

export const Search = () => {
    const query = useQuery();
    const search = query.get("q");

    return (
        <div>
        <p>{search}</p>
        </div>
    )
}