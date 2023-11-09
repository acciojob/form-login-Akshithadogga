function getFormvalue() {
    //Write your code here
	const form=document.getElementById("form1");
	let allelements=form.getElementsByTagName("input");
    let f_name=allelements[0].value;
    let surname=allelements[1].value;
    alert(f_name+" "+surname);
}
