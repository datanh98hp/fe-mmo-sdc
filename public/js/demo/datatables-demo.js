// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable({
    "language": {
    "decimal":        "",
    "emptyTable":     "Không tìm thấy dữ liệu trong bảng",
    "info":           "Hiển thị _START_ đến _END_ of _TOTAL_ mục",
    "infoEmpty":      "Đang hiển thị 0 to 0 of 0 mục",
    "infoFiltered":   "(Kết quả lọc from _MAX_ tổng mục)",
    "infoPostFix":    "",
    "thousands":      ",",
    "lengthMenu":     "Hiển thị _MENU_ mục",
    "loadingRecords": "Đang tải...",
    "processing":     "",
    "search":         "Tìm:",
    "zeroRecords":    "Không thấy dữ liệu phù hợp",
    "paginate": {
        "first":      "Đầu tiên",
        "last":       "Cuối cùng",
        "next":       "Tiếp",
        "previous":   "Trước"
    },
    "aria": {
        "sortAscending":  ":Hành động sắp xếp theo cột tăng dần",
        "sortDescending": ":Hành động sắp xếp theo cột giảm dần"
    }
  }
  });
});
