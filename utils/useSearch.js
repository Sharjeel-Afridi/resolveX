import Fuse from "fuse.js";
const useSearch = (api, input) => {

    const fuseOptions = {
        keys: ['Subjects'],
        threshold: 0.5,
    };
    const fuse = new Fuse([], fuseOptions);
    fuse.setCollection(api.items);
    
    return fuse.search(input);
    
    
};
export default useSearch;