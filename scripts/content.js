
function change_anchor_href() {
        let notice_table = document.querySelector("table");
        
        if (notice_table) {
            let anchors =  document.querySelectorAll('.nav-link');
            anchors.forEach((a) => {
                const url = `https://portal.kaist.ac.kr/kaist/portal/board/ntc/0?lang=en#${a.getAttribute("data-pst-no")}`;
                // console.log("Good url", url, a.getAttribute("baseURI"));
                a.setAttribute("href", url);

                const new_anchor = a.cloneNode(true);
                new_anchor.setAttribute("href", url);
                a.parentNode.replaceChild(new_anchor, a);
            });
        }
}

change_anchor_href();