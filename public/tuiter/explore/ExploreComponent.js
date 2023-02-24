import PostSummaryList from "../PostSummaryList/index.js";
const ExploreComponent = () => {
    return(`
        <div class="d-flex flex-row">
                <div class="input-group">
                    <span class="input-group-text bg-white">
                        <i class="fas fa-search text-secondary"></i>
                    </span>
                    <input type="search" placeholder="Search Tuiter" class="form-control"/>
                </div>
                <div class="align-self-center ps-3">
                    <a href="explore-settings.html"><i class="fa fa-cog fa-2x"></i></a>
                </div>
            </div>
            <ul class="nav nav-tabs my-2">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>
            </ul>
            <div class="position-relative">
                <img class="img-fluid" src="../images/"/>
                <div class="position-absolute bottom-0 start-0 fs-2 text-light fw-bold p-2">SpaceX's Starship</div>
            </div>
            ${PostSummaryList()}
    `);
}
export default ExploreComponent;