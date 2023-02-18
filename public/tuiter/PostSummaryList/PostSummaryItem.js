const PostSummaryItem = ({topic, userName, time, image, title}) => {
    return(`
        <li class="list-group-item d-flex flex-row justify-content-between">
            <div>
                <span class="text-secondary">${topic}</span><br>
                <div class="d-flex flex-row align-items-center">
                    <span class="fw-bold">${userName}</span>
                    <i class="fas fa-check-circle px-1"></i>
                    <span class="text-secondary">- ${time}</span>
                </div>
                <span class="fw-bold">
                    ${title}
                </span>
            </div>
            <img class="mediumImage ms-3" src=${image}/>
        </li>
    `);
}
export default PostSummaryItem;