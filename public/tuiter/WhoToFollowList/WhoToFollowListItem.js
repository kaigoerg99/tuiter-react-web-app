const WhoToFollowListItem = ({avatarIcon, userName, handle}) => {
    return(`
        <li class="list-group-item d-flex flex-row justify-content-between align-items-center">
            <div class="d-flex flex-row align-items-center">
                <img class="smallImage rounded-circle" src=${avatarIcon}/>
                <div class="ms-2">
                    <span class="fw-bold">${userName} </span>
                    <i class="fas fa-check-circle"></i>
                    <br>
                    @${handle}
                </div>
            </div>
            <button type="button" class="btn btn-primary rounded-pill">Follow</button>
        </li>
    `);
}
export default WhoToFollowListItem;