$(document).ready(function () {
    const productList = [
        {
            id: "1",
            name: "IMPERVA",
            description: "Imperva understands that security, compliance, reliability and general network health are essential to your organization.They’re committed to ...",
            image: "http://gulfitd.com/uploadfolder/imperva.jpg",
            url: "http://gulfitd.com/Imperva"
        },
        {
            id: "2",
            name: "SAILPOINT",
            description: "SailPoint’s success is directly tied to their Core Values, also known as the “Four I’s”: Innovation, Integrity, Impact, and ",
            image: "http://gulfitd.com/uploadfolder/sail_point_logo1.jpg",
            url: "http://gulfitd.com/sail-point"
        }, {
            id: "3",
            name: "FCASE",
            description: "FCASE is a data aggregation hub which takes fraud management systems from basic standalone detection to a more",
            image: "http://gulfitd.com/uploadfolder/fcase_logo.jpg",
            url: "http://gulfitd.com/fcase"
        }, {
            id: "4",
            name: "NNT",
            description: "Finally, NNT uses dynamic baselining to ensure your systems align to the most up- to - date, secure, and compliant state possible",
            image: "http://gulfitd.com/uploadfolder/nnt-logo_12.png",
            url: "http://gulfitd.com/nnt"
        }, {
            id: "5",
            name: "SILVER PEAK",
            description: "Unlike other vendors, we offer you a fully integrated solution that combines high- performance SD - WAN, WAN optimization, routing and a stateful ",
            image: "http://gulfitd.com/uploadfolder/silver_peak.jpg",
            url: "http://gulfitd.com/silver-peak"
        }, {
            id: "6",
            name: "ARRAY NETWORKS",
            description: "Proven at over 5000 worldwide customer deployments, Array is recognized by leading enterprises and service providers for next - generation technology ",
            image: "http://gulfitd.com/uploadfolder/array_mlogo.jpg",
            url: "http://gulfitd.com/array"
        }, {
            id: "7",
            name: "CYBER SPONSE",
            description: "In line with their aspiration of global collaboration on all things cyber, CyberSponse is a proud founding sponsor of the Incident Response ",
            image: "http://gulfitd.com/uploadfolder/cybersponse.jpg",
            url: "http://gulfitd.com/cybersponse"
        }, {
            id: "8",
            name: "ARCON",
            description: "The management at ARCON subscribe to one thought “innovate risk controls”. Further the management consist of various industry leaders on ",
            image: "http://gulfitd.com/uploadfolder/arcon.jpg",
            url: "http://gulfitd.com/arcon"
        },
    ]

    let generateProductList = productList.map((elem) => {
        return `<div class="col-sm-3 all-prod-list">
            <div class="prod-content">
                <a href="${elem.url}">
                    <div class="all-prod-img">
                        <img width="152px" height="50px" src="${elem.image}">
                           </div>
                        <div class="all-prod-content">
                            <p>${elem.description.substr(0, 90).concat("...")}</p>
                            <i class="fas fa-long-arrow-alt-right"></i>
                        </div>
                        </a>
                     </div>
            </div>`
    }).join("");

    $('#productList').html(generateProductList)

})