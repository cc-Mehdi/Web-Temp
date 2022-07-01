let body = document.querySelector(".containerTable-body");
for (let i = 0; i < 20; i++) {
    body.innerHTML += `
        <tr>
        <td class="containerTable-lblValue">`+ (i + 1) + `</td>
        <td class="containerTable-lblValue">Lost City</td>
        <td class="containerTable-lblValue">Action</td>
        <td class="containerTable-lblValue">
            <button class="tableValue-btnOption">Details</button>
            <button class="tableValue-btnOption">Edit</button>
            <button class="tableValue-btnOption">Delete</button>
        </td>
    </tr>
        `;

}
