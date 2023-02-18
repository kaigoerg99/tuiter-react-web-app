const NavigationSidebar = () => {
    return(`
   <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action">
                    <i class="fab fa-twitter"></i></a>
                <a href="#" class="list-group-item list-group-item-action d-flex flex-row align-items-center">
                    <i class="fas fa-home"></i><span class="ms-1 d-none d-xl-block">Home</span></a>
                <a href="#" class="list-group-item list-group-item-action active d-flex flex-row align-items-center">
                    <i class="fas fa-hashtag"></i><span class="ms-1 d-none d-xl-block">Explore</span></a>
                <a href="#" class="list-group-item list-group-item-action d-flex flex-row align-items-center">
                    <i class="fas fa-bell"></i><span class="ms-1 d-none d-xl-block">Notifications</span></a>
                <a href="#" class="list-group-item list-group-item-action d-flex flex-row align-items-center">
                    <i class="fas fa-envelope"></i><span class="ms-1 d-none d-xl-block">Messages</span></a>
                <a href="#" class="list-group-item list-group-item-action d-flex flex-row align-items-center">
                    <i class="fas fa-bookmark"></i><span class="ms-1 d-none d-xl-block">Bookmarks</span></a>
                <a href="#" class="list-group-item list-group-item-action d-flex flex-row align-items-center">
                    <i class="fas fa-list"></i><span class="ms-1 d-none d-xl-block">Lists</span></a>
                <a href="#" class="list-group-item list-group-item-action d-flex flex-row align-items-center">
                    <i class="fas fa-user"></i><span class="ms-1 d-none d-xl-block">Profile</span></a>
                <a href="#" class="list-group-item list-group-item-action d-flex flex-row align-items-center">
                    <i class="fas fa-circle"></i></i><span class="ms-1 d-none d-xl-block">More</span></a>
            </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;