<template>
  <div class="navbar">
    <div class="right-menu">
      <el-popover v-for="v in rightList" :key="v.icon" placement="bottom" trigger="hover">
        <el-row>
          <el-col v-for="item in 3" :key="item" :span="8">{{ item }}</el-col>
        </el-row>
        <i slot="reference" :class="v.icon" />
      </el-popover>

      <el-dropdown class="avatar-container right-menu-item hover-effect line-h-60">
        <span class="el-dropdown-link">
          <i class="el-icon-user my-icon" />
          <i class="el-icon-arrow-down el-icon--right" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <div class="flex-spacebet-center p-21-25 h-82 pointer border-b">
            <div class="w-120">
              <p class="line-h-20 font-15 content-T ellipsis">{{ 'bilibili' }}</p>
              <p class="line-h-16 font-sm content-9 ellipsis mt-3">{{ 'boss' }}</p>
            </div>
            <el-avatar icon="el-icon-user-solid" />
          </div>
          <div class="border-b p-8-0 font-md border-b w100">
            <router-link v-for="v in routeList" :key="v.label" :to="v.path">
              <el-dropdown-item><i :class="v.icon" />{{ v.label }}</el-dropdown-item>
            </router-link>
          </div>
          <div class="h-48 p-0-25 line-h-48 text-right pointer font-md content-T" @click.native="logout">LOG OUT</div>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      rightList: [
        {
          icon: 'el-icon-bell',
          content: '通知'
        },
        {
          icon: 'el-icon-present',
          content: '进入我的现金券'
        },
        {
          icon: 'el-icon-s-shop',
          content: '营销市场'
        }
      ],
      routeList: [
        {
          label: 'MEMBERS',
          path: '/accountSetting/membersManagement',
          icon: 'el-icon-s-opportunity'
        },
        {
          label: 'MYOPDER',
          path: '/nested/orderManagement',
          icon: 'el-icon-s-order'
        },
        {
          label: 'CASH',
          path: '/nested/cashCoupon',
          icon: 'el-icon-s-ticket'
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'device'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 100%;
  overflow: hidden;
  position: relative;
  background: #fff;
  border-bottom: 1px solid #ccc;

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    &:focus {
      outline: none;
    }

    span {
      height: 36px;
      width: 36px;
      line-height: 36px;
      text-align: center;
      font-size: 18px;
      cursor: pointer;
      margin-right: 10px;

      &:hover {
        color: #0076FE;
        border-radius: 50%;
        font-weight: 700;
        background: #ebf2fe;
        transition: background .3s;
        transition: color .3s;
        transition: font-weight .3s;
      }
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
  .my-icon {
    height: 30px;
    width: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 25px;
    margin-right: 20px;
  }
}
.border-b {
  border-bottom: 1px solid #eceff6;
}
.w-120 {
  width: 120px;
}
.font-15 {
  font-size: 15px;
}
</style>
