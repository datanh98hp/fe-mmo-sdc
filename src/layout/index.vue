    <template>
      <div>
        <div id="wrapper">
          <!-- Sidebar -->
          <ul
            class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
            id="accordionSidebar"
          >
            <!-- Sidebar - Brand -->
            <router-link
              class="sidebar-brand d-flex align-items-center justify-content-center"
              to="/home"
            >

              <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-laugh-wink"></i>
              </div>
              <div class="sidebar-brand-text mx-3">MMO<sup> 2 </sup></div>
            </router-link>

            <!-- Divider -->
            <hr class="sidebar-divider my-0" />

            <!-- Nav Item - Dashboard -->
            <li class="nav-item active">
              <router-link class="nav-link" to="/home">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Tổng quan</span></router-link
              >
            </li>

            <!-- Divider -->
            <hr class="sidebar-divider" />

            <!-- Heading -->
            <div class="sidebar-heading">Công việc</div>

            <!-- Nav Item - Pages Collapse Menu -->
            <li class="nav-item">
              <a
                class="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                <i class="fas fa-fw fa-cog"></i>
                <span>Chiến dịch</span>
              </a>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionSidebar"
              >
                <div class="bg-white py-2 collapse-inner rounded">
                  <!-- <h6 class="collapse-header">Thành phần</h6> -->
                  <router-link class="collapse-item" to="/camps">Tất cả chiến dịch</router-link>
                  <router-link class="collapse-item" to="/history">Lịch sử gần đây</router-link>
                </div>
              </div>
            </li>

            <!-- Nav Item - Utilities Collapse Menu -->
            <li class="nav-item">
              <a
                class="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapseUtilities"
                aria-expanded="true"
                aria-controls="collapseUtilities"
              >
                <i class="fas fa-fw fa-wrench"></i>
                <span>Doanh thu</span>
              </a>
              <div
                id="collapseUtilities"
                class="collapse"
                aria-labelledby="headingUtilities"
                data-parent="#accordionSidebar"
              >
                <div class="bg-white py-2 collapse-inner rounded">
                  <h6 class="collapse-header">Hoa hồng:</h6>
                  <a class="collapse-item" href="/ref">Hệ thồng giới thiệu</a>
                  <a class="collapse-item" href="/balance-ref">Hoa hồng giới thiệu</a>

                </div>
              </div>
            </li>

            <!-- Divider -->
            <hr class="sidebar-divider" />

            <!-- Heading -->
            <div class="sidebar-heading">Báo cáo</div>

            <!-- Nav Item - Pages Collapse Menu -->

            <!-- Nav Item - Charts -->
            <li class="nav-item">
              <a class="nav-link" href="/report">
                <i class="fas fa-fw fa-chart-area"></i>
                <span>Report</span></a
              >
            </li>

            <!-- Nav Item - Tables -->
            <li class="nav-item">
              <a class="nav-link" href="/analys">
                <i class="fas fa-fw fa-table"></i>
                <span>Bảng thống kê đơn</span></a
              >
            </li>

            <!-- Divider -->
            <hr class="sidebar-divider d-none d-md-block" />

            <!-- Sidebar Toggler (Sidebar) -->
            <!-- <div class="text-center d-none d-md-inline">
              <button class="rounded-circle border-0" id="sidebarToggle"></button>
            </div> -->
          </ul>
          <!-- End of Sidebar -->

          <!-- Content Wrapper -->
          <div id="content-wrapper" class="d-flex flex-column">
            <!-- Main Content -->
            <div id="content">
              <!-- Topbar -->
              <nav
                class="
                  navbar navbar-expand navbar-light
                  bg-white
                  topbar
                  mb-4
                  static-top
                  shadow
                "
              >
                <!-- Sidebar Toggle (Topbar) -->
                <button
                  id="sidebarToggleTop"
                  class="btn btn-link d-md-none rounded-circle mr-3"
                >
                  <i class="fa fa-bars"></i>
                </button>

                <!-- Topbar Navbar -->
                <ul class="navbar-nav ml-auto">
                  <!-- Nav Item - Search Dropdown (Visible Only XS) -->
                  <li class="nav-item dropdown no-arrow d-sm-none">
                    <!-- Dropdown - Messages -->
                    <div
                      class="
                        dropdown-menu dropdown-menu-right
                        p-3
                        shadow
                        animated--grow-in
                      "
                      aria-labelledby="searchDropdown"
                    >
                      <form class="form-inline mr-auto w-100 navbar-search">
                        <div class="input-group">
                          <input
                            type="text"
                            class="form-control bg-light border-0 small"
                            placeholder="Search for..."
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                          />
                          <div class="input-group-append">
                            <button class="btn btn-primary" type="button">
                              <i class="fas fa-search fa-sm"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </li>

                  <div class="topbar-divider d-none d-sm-block"></div>

                  <!-- Nav Item - User Information -->
                  <li class="nav-item dropdown no-arrow">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="userDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span class="mr-2 d-none d-lg-inline text-gray-600 small"
                        >{{this.$store.getters.getUserInf.user}}</span
                      >
                      <img
                        class="img-profile rounded-circle"
                        src="img/undraw_profile.svg"
                      />
                    </a>
                    <!-- Dropdown - User Information -->
                    <div
                      class="
                        dropdown-menu dropdown-menu-right
                        shadow
                        animated--grow-in
                      "
                      aria-labelledby="userDropdown"
                    >
                      <router-link class="dropdown-item" to='/profile'>
                        <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                        Cá nhân
                      </router-link>
<!--                      <a class="dropdown-item" href="#">
                        <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                        Tài khoản
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                        Lịch sử hoạt động
                      </a>-->
                      <div class="dropdown-divider"></div>
                      <a
                        class="dropdown-item"
                        href="#"
                        data-toggle="modal"
                        data-target="#logoutModal"
                      >
                        <i
                          class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"
                        ></i>
                        Đăng xuất
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>
              <!-- End of Topbar -->

              <!-- Begin Page Content -->
    <!--          <div class="container-fluid">
                &lt;!&ndash; Content Row &ndash;&gt;
                <div class="row">
                  &lt;!&ndash; Earnings (Monthly) Card Example &ndash;&gt;
                  <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-primary shadow h-100 py-2">
                      <div class="card-body">
                        <div class="row no-gutters align-items-center">
                          <div class="col mr-2">
                            <div
                              class="
                                text-xs
                                font-weight-bold
                                text-primary text-uppercase
                                mb-1
                              "
                            >
                              Earnings (Monthly)
                            </div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">
                              $40,000
                            </div>
                          </div>
                          <div class="col-auto">
                            <i class="fas fa-calendar fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  &lt;!&ndash; Earnings (Monthly) Card Example &ndash;&gt;
                  <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-success shadow h-100 py-2">
                      <div class="card-body">
                        <div class="row no-gutters align-items-center">
                          <div class="col mr-2">
                            <div
                              class="
                                text-xs
                                font-weight-bold
                                text-success text-uppercase
                                mb-1
                              "
                            >
                              Earnings (Annual)
                            </div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">
                              $215,000
                            </div>
                          </div>
                          <div class="col-auto">
                            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  &lt;!&ndash; Earnings (Monthly) Card Example &ndash;&gt;
                  <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-info shadow h-100 py-2">
                      <div class="card-body">
                        <div class="row no-gutters align-items-center">
                          <div class="col mr-2">
                            <div
                              class="
                                text-xs
                                font-weight-bold
                                text-info text-uppercase
                                mb-1
                              "
                            >
                              Tasks
                            </div>
                            <div class="row no-gutters align-items-center">
                              <div class="col-auto">
                                <div
                                  class="
                                    h5
                                    mb-0
                                    mr-3
                                    font-weight-bold
                                    text-gray-800
                                  "
                                >
                                  50%
                                </div>
                              </div>
                              <div class="col">
                                <div class="progress progress-sm mr-2">
                                  <div
                                    class="progress-bar bg-info"
                                    role="progressbar"
                                    style="width: 50%"
                                    aria-valuenow="50"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-auto">
                            <i
                              class="fas fa-clipboard-list fa-2x text-gray-300"
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  &lt;!&ndash; Pending Requests Card Example &ndash;&gt;
                  <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-warning shadow h-100 py-2">
                      <div class="card-body">
                        <div class="row no-gutters align-items-center">
                          <div class="col mr-2">
                            <div
                              class="
                                text-xs
                                font-weight-bold
                                text-warning text-uppercase
                                mb-1
                              "
                            >
                              Pending Requests
                            </div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">
                              18
                            </div>
                          </div>
                          <div class="col-auto">
                            <i class="fas fa-comments fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                &lt;!&ndash; Content Row &ndash;&gt;
              </div>-->
                <hr/>
              <div class="container-fluid">
    <!--            <div class="row">
                    <slot></slot>
                </div>-->
                  <slot></slot>
              </div>

              <!-- /.container-fluid -->
            </div>

            <!-- End of Main Content -->

            <!-- Footer -->
            <footer class="sticky-footer bg-white">
              <div class="container my-auto">
                <div class="copyright text-center my-auto">
                   <span>Copyright &copy; SDC | MMO2 Website 2022</span>
                </div>
              </div>
            </footer>
            <!-- End of Footer -->
          </div>
          <!-- End of Content Wrapper -->
        </div>
        <!-- End of Page Wrapper -->

        <!-- Scroll to Top Button-->
        <a class="scroll-to-top rounded" href="#">
          <i class="fas fa-angle-up"></i>
        </a>

        <!-- Logout Modal-->
        <div
          class="modal fade"
          id="logoutModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Bạn muốn đăng xuất?</h5>
                <button
                  class="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div class="modal-body">
                Chọn "Đăng xuất" dưới đây nếu bạn muốn đăng xuất phiên làm việc.
              </div>
              <div class="modal-footer">
                <button
                  class="btn btn-secondary"
                  type="button"
                  data-dismiss="modal"
                >
                  Hủy
                </button>
                <button @click="logout()" data-dismiss="modal" class="btn btn-primary" href="#">Đăng xuất</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </template>

    <script>


    export default {
      name: "Layout-root",

      child:{

      },
        mounted() {
            /*const user = JSON.parse(localStorage.getItem('user-inf')) || ''

            if (!user){
                this.$router.push({name:'Login'})
            }*/
        },
        data() {
          //const data = [[50, 30, 15, 50, 20, 28],[40, 20, 12, 15, 20, 25]];
            return {

            };
      },
        methods:{
          logout(){
              localStorage.clear()
              this.$store.dispatch('resetState')
              this.$router.push({name:'Login'})
          }
        }
    };
    </script>