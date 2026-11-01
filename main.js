/**
 * bài tập 1: Quản lý tuyển sinh
 * input:
 * - Điểm chuẩn: 0 -> 34.5
 * - Điểm môn 1: 0 ->10
 * - Điểm môn 2: 0 ->10
 * - Điểm môn 3: 0 ->10
 * - Khu vực: Không chọn (+0), A (+2), B (+1), C (+0.5)
 * - Đối tượng: Không chọn (+0), 1 (+2.5), 2 (+1.5), 3 (+1)
 *
 * xử lý:
 * bấm nút kết quả
 * gán biến:điểm chuẩn, điểm khu vực, điểm đối tượng, điểm môn 1, điểm môn 2, điểm môn 3
 * tạo biến tổng điểm = điểm môn 1 + điểm môn 2 + điểm môn 3 + điểm khu vực + điểm đối tượng
 * - nếu điền điểm chuẩn thì gán điểm chuẩn = giá trị nhập vào, nếu không điền lấy mặc dịnh 0
 * - switch case khu vực: nếu chọn A thì cộng 2, B cộng 1, C cộng 0.5, không chọn cộng 0
 * - switch case đối tượng: nếu chọn 1 thì cộng 2.5, 2 cộng 1.5, 3 cộng 1, không chọn cộng 0
 * if lồng nhau
 * if(điểm môn 1 == 0 || điểm môn 2 == 0 || điểm môn 3 == 0) {
 *     // xử lý trường hợp có môn điểm bằng 0
 * } else {if(tổng điểm < điểm chuẩn) {
 *     // xử lý trường hợp tổng điểm < điểm chuẩn
 * } else {
 * // xử lý trường hợp tổng điểm >= điểm chuẩn}*
 *
 *
 * Output:
 * - Bạn đã rớt. Do có môn điểm bằng 0
 * - Bạn đã rớt. Do tổng điểm: XXX < điểm chuẩn
 * - Bạn đã đậu. Tổng điểm: XXX > điểm chuẩn
 *
 *
 */

function regionPoint(region) {
  switch (region) {
    case "A":
      return 2;
    case "B":
      return 1;
    case "C":
      return 0.5;
    default:
      return 0;
  }
}
function policyPoint(policy) {
  switch (policy) {
    case "1":
      return 2.5;
    case "2":
      return 1.5;
    case "3":
      return 1;
    default:
      return 0;
  }
}
function calculateTotalScore(subject1, subject2, subject3, region, policy) {
  const regionScore = regionPoint(region);
  const policyScore = policyPoint(policy);
  return subject1 + subject2 + subject3 + regionScore + policyScore;
}
function calculateAdmission() {
  const region = document.getElementById("region").value;
  const policy = document.getElementById("policy").value;
  const subject1 = document.getElementById("subjectScore1").value * 1;
  const subject2 = document.getElementById("subjectScore2").value * 1;
  const subject3 = document.getElementById("subjectScore3").value * 1;
  const standardScore = document.getElementById("benchmarkScore").value * 1;

  const totalScore = calculateTotalScore(
    subject1,
    subject2,
    subject3,
    region,
    policy,
  );

  const resultDiv = document.getElementById("admissionResult");
  if (subject1 === 0 || subject2 === 0 || subject3 === 0) {
    resultDiv.innerHTML = "👉 Kết quả: Bạn đã rớt. Do có môn điểm bằng 0";
  } else if (totalScore < standardScore) {
    resultDiv.innerHTML = `👉 Kết quả: Bạn đã rớt. Do tổng điểm: ${totalScore} < điểm chuẩn`;
  } else {
    resultDiv.innerHTML = `👉 Kết quả: Bạn đã đậu. Tổng điểm: ${totalScore} >= điểm chuẩn`;
  }
}

/**
 * Bài tập 2: Tính tiền điện
 * input:
 * - Họ tên khách hàng: Chuỗi
 * - Số kw tiêu thụ: Số >=0
 *
 * xử lý:
 * if (số kw <= 50){
 *    số tiền điện = số kw * 500}
 * else if (số kw <= 100){
 *   số tiền điện = 50 * 500 + (số kw - 50) * 650}
 * else if (số kw <= 200){
 *   số tiền điện = 50 * 500 + 50 * 650 + (số kw - 100) * 850}
 * else if (số kw <= 350){
 *   số tiền điện = 50 * 500 + 50 * 650 + 100 * 850 + (số kw - 200) * 1100}
 * else {
 *   số tiền điện = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (số kw - 350) * 1300}
 *
 *
 * Output:
 * - Họ tên khách hàng: xxx
 * - Số kw tiêu thụ: xxx kw
 * - Số tiền điện: xxx VNĐ
 */
function tier1(kw) {
  return kw * 500;
}
function tier2(kw) {
  return 50 * 500 + (kw - 50) * 650;
}
function tier3(kw) {
  return 50 * 500 + 50 * 650 + (kw - 100) * 850;
}
function tier4(kw) {
  return 50 * 500 + 50 * 650 + 100 * 850 + (kw - 200) * 1100;
}
function tier5(kw) {
  return 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kw - 350) * 1300;
}
function calculateElectricity() {
  const customerName = document.getElementById("customerName").value;
  const kwUsed = document.getElementById("kwUsed").value * 1;
  let electricityBill = 0;

  if (kwUsed <= 50) {
    electricityBill = tier1(kwUsed);
  } else if (kwUsed <= 100) {
    electricityBill = tier2(kwUsed);
  } else if (kwUsed <= 200) {
    electricityBill = tier3(kwUsed);
  } else if (kwUsed <= 350) {
    electricityBill = tier4(kwUsed);
  } else {
    electricityBill = tier5(kwUsed);
  }

  const resultDiv = document.getElementById("electricityResult");
  resultDiv.innerHTML = `
        👉 Kết quả:
        <p>Họ tên khách hàng: ${customerName}</p>
        <p>Số kw tiêu thụ: ${kwUsed} kw</p>
        <p>Số tiền điện: ${electricityBill.toLocaleString("vi-VN")} VNĐ</p>
    `;
}
