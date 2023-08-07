function handleSubmit() {
  // lấy giá trị của input email
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  // hiển thị lỗi nếu người dùng nhập sai định dạng email
  const errorEmail = document.getElementById("error-email");
  // điều kiện để là email
  const checkMail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log("check value email", emailValue);
  // check  email vừa nhập
  const check = emailValue.match(checkMail);

  // hiển thị thông tin user
  const sectionContent = document.querySelector(".section-content");
  console.log("check section", sectionContent);

  // kiểm soát submit
  const submitControl = document.querySelector(".submit-email");
  if (check) {
    sectionContent.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "Vui lòng nhập đúng định dạng email";
  }
}

// view more
// bấm 2 lần mới hiện
function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".view-more");
  viewMore.style.display = "inline-block";
}

function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".view-more");
  viewMore.style.display = "none";
}

function handleViewMore(element) {
  const parentElement = element.closest(".parent");
  const viewMore = parentElement.querySelector(".view-more");
  viewMore.style.display = "none";

  if (viewMore.innerHTML !== "View less") {
    const sectionContent = parentElement.querySelectorAll(".section-content");
    sectionContent.forEach((element) => {
      element.style.display = "block";
    });
    viewMore.innerHTML = "View less";
  } else {
    const sectionContent = parentElement.querySelectorAll(".section-content");
    sectionContent.forEach((element) => {
      element.style.display = "none";
    });
    viewMore.innerHTML = "View more";
  }
}
