<template>
<div>
    <p id="notice"></p>

    <div class="lapor-dashboard-main">
        <div class="lapor-userbox">
            <div class="lapor-userbox-default-height lapor-userbox-get-height">
                <div class="lapor-userbox-profile">
                    <img src="../../assets/img/anonymous/profile_male.jpg" class="lapor-profile-resize">
                </div>
                <h1 class="lapor-userbox-name">agustinustheoo</h1>
            </div>
            <div class="lapor-userbox-default-height lapor-userbox-get-height">
                <i>"Lifemotto"</i>
            </div>
            <div class="lapor-userbox-get-height lapor-userbox-detail">
                <div>
                    <i class="fas fa-envelope"></i>
                    <span>
                        email@email.com 
                    </span>
                </div>
                <div>
                    <i class="fas fa-phone"></i>
                    <span>
                        Phone
                    </span>
                </div>
                <div>
                    <i class="fas fa-map-marker-alt"></i>
                    <span>
                        Indonesia
                    </span>
                </div>
            </div>
            <div class="lapor-profile-height-trigger">
                <i class="fas fa-angle-down"></i>
            </div>
        </div>
        <div class="lapor-twitbox">
            <form>
                <div class="lapor-twitbox-form">
                    <textarea id="statusTwitbox" placeholder="Write your thoughts.." cols="70" maxlength="500" class="lapor-twitbox-input" />
                    <div class="lapor-twitbox-form-accessories">
                        <div id="statusCount">0/500</div>
                        <input type="submit" value="Post" class="lapor-twitbox-small-button">
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import $ from 'jquery';
import Swal from 'sweetalert2';

export default {
    name: 'Dashboard',
    mounted: function(){
        var statusTwitbox = document.getElementById("statusTwitbox");
        statusTwitbox.value = "";

        function countChar(val) {
            statusTwitbox.style.height = statusTwitbox.scrollHeight + "px";
            statusTwitbox.style.overflow = "hidden";
            var len = val.length;
            if (len > 500) {
                val = val.substring(0, 500);
            } else {
                $('#statusCount').text(len + '/500');
                if(len > 450 && len <= 500){
                    $('#statusCount').css("color", "red");
                }
                else{
                    $('#statusCount').css("color", "#282828");
                }
            }
        }
        $('#statusTwitbox').on('keyup', function() {
            countChar($('#statusTwitbox').val());
        });
        $('#statusTwitbox').on('keypress', function() {
            countChar($('#statusTwitbox').val());
        });
        
        var notice = document.getElementById('notice');
        notice.style.display="none";
        var Toast = Swal.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 3000
        })
        if(notice.innerText.trim()!=""){
            Toast.fire({
                type: 'success',
                title: notice.innerText
            })
        }

        var userBox = document.getElementsByClassName('lapor-userbox');
        // var userBoxHeight = [];
        var userBoxDefaultHeight = [];
        var userBoxInnerContainer = []
        var userBoxDefaultInnerContainer = []
        for(let i = 0; i < userBox.length; i++){
            userBoxInnerContainer.push(userBox[i].getElementsByClassName('lapor-userbox-get-height'));
            userBoxDefaultInnerContainer.push(userBox[i].getElementsByClassName('lapor-userbox-default-height'));
        }
        var innerContainerStyle;
        
        // function setUserBoxHeight(){
        //     for(let j = 0; j < userBox.length; j++){
        //         userBoxHeight[j] = 0;
        //         for(let i = 0; i < userBoxInnerContainer[j].length; i++){
        //             userBoxHeight[j] += userBoxInnerContainer[j][i].clientHeight;
        //             if(i > 0){
        //                 innerContainerStyle = userBoxInnerContainer[j][i].currentStyle || window.getComputedStyle(userBoxInnerContainer[j][i]);
        //                 userBoxHeight[j] += parseInt(
        //                     innerContainerStyle.marginTop.substr(0, 
        //                         innerContainerStyle.marginTop.lastIndexOf("px")
        //                     )
        //                 );
        //                 userBoxHeight[j] += parseInt(
        //                     innerContainerStyle.marginBottom.substr(0, 
        //                         innerContainerStyle.marginBottom.lastIndexOf("px")
        //                     )
        //                 );
        //             }
        //         }
        //         userBox[j].style.height = userBoxHeight[j].toString() + "px";
        //     }
        // }

        function setUserBoxDefaultHeight(){
            for(let j = 0; j < userBox.length; j++){
                userBoxDefaultHeight[j] = 0;
                for(var i = 0; i < 2; i++){
                    userBoxDefaultHeight[j] += userBoxDefaultInnerContainer[j][i].clientHeight;
                    if(i == 1){
                        innerContainerStyle = userBoxDefaultInnerContainer[j][i].currentStyle || window.getComputedStyle(userBoxDefaultInnerContainer[j][i]);
                        userBoxDefaultHeight[j] += parseInt(
                            innerContainerStyle.marginTop.substr(0, 
                                innerContainerStyle.marginTop.lastIndexOf("px")
                            )
                        );
                        userBoxDefaultHeight[j] += parseInt(
                            innerContainerStyle.marginBottom.substr(0, 
                                innerContainerStyle.marginBottom.lastIndexOf("px")
                            )
                        );
                    }
                }
                userBox[j].style.height = userBoxDefaultHeight[j].toString() + "px";
            }
        }
        setUserBoxDefaultHeight();

        function setSpecificUserBoxHeight(thisUserBox){
            let thisUserBoxHeight = 0;
            let thisUserBoxInnerContainer = thisUserBox.getElementsByClassName('lapor-userbox-get-height');
            for(let i = 0; i < thisUserBoxInnerContainer.length; i++){
                thisUserBoxHeight += thisUserBoxInnerContainer[i].clientHeight;
                if(i > 0){
                    innerContainerStyle = thisUserBoxInnerContainer[i].currentStyle || window.getComputedStyle(thisUserBoxInnerContainer[i]);
                    thisUserBoxHeight += parseInt(
                        innerContainerStyle.marginTop.substr(0, 
                            innerContainerStyle.marginTop.lastIndexOf("px")
                        )
                    );
                    thisUserBoxHeight += parseInt(
                        innerContainerStyle.marginBottom.substr(0, 
                            innerContainerStyle.marginBottom.lastIndexOf("px")
                        )
                    );
                }
            }
            thisUserBox.style.height = thisUserBoxHeight.toString() + "px";
        }

        function setSpecificUserBoxDefaultHeight(thisUserBox){
            let thisUserBoxDefaultHeight = 0;
            let thisUserBoxInnerContainer = thisUserBox.getElementsByClassName('lapor-userbox-default-height');
            for(var i = 0; i < 2; i++){
                thisUserBoxDefaultHeight += thisUserBoxInnerContainer[i].clientHeight;
                if(i == 1){
                    innerContainerStyle = thisUserBoxInnerContainer[i].currentStyle || window.getComputedStyle(thisUserBoxInnerContainer[i]);
                    thisUserBoxDefaultHeight += parseInt(
                        innerContainerStyle.marginTop.substr(0, 
                            innerContainerStyle.marginTop.lastIndexOf("px")
                        )
                    );
                    thisUserBoxDefaultHeight += parseInt(
                        innerContainerStyle.marginBottom.substr(0, 
                            innerContainerStyle.marginBottom.lastIndexOf("px")
                        )
                    );
                }
            }
            thisUserBox.style.height = thisUserBoxDefaultHeight.toString() + "px";
        }

        var laporUserBoxDetail = document.getElementsByClassName('lapor-userbox-detail');
        var toggleButton = document.getElementsByClassName('fa-angle-down');
        var toggleButtonUp;
        var toggeledUserBox;
        for(let i = 0; i < userBox.length; i++){
            toggleButton[i].onclick = function(){
                toggleButtonUp = document.getElementsByClassName('fa-angle-up');
                toggeledUserBox = toggleButton[i].parentNode.parentNode;
                if(toggleButtonUp.length === 0){
                    laporUserBoxDetail[i].style.display = "block";
                    setSpecificUserBoxHeight(toggeledUserBox);
                    toggleButton[i].classList.add("fa-angle-up");
                    setTimeout(function(){
                        laporUserBoxDetail[i].style.opacity = "1";
                    }, 300)
                }
                else{
                    for(let j = 0; j < toggleButtonUp.length; j++){
                        if(toggleButtonUp[j] == toggleButton[i]){
                            toggleButton[i].classList.remove("fa-angle-up");
                            setSpecificUserBoxDefaultHeight(toggeledUserBox);
                            laporUserBoxDetail[i].style.display = "none";
                            laporUserBoxDetail[i].style.opacity = "0";
                        }
                        else{
                            laporUserBoxDetail[i].style.display = "block";
                            setSpecificUserBoxHeight(toggeledUserBox);
                            toggleButton[i].classList.add("fa-angle-up");
                            setTimeout(function(){
                                laporUserBoxDetail[i].style.opacity = "1";
                            }, 300)
                        }
                    }
                }
            }
        }

        window.onresize = function(){
            statusTwitbox.style.height =  0;
            statusTwitbox.style.height = statusTwitbox.scrollHeight + "px";
            statusTwitbox.style.overflow = "hidden";
            for(let i = 0; i < userBox.length; i++){
                let thisToggleButtonUp = userBox[i].getElementsByClassName("fa-angle-up");
                if(thisToggleButtonUp.length === 0){
                    setSpecificUserBoxDefaultHeight(userBox[i]);
                }
                else{
                    setSpecificUserBoxHeight(userBox[i]);
                }
            }
        }
    }
}
</script>
