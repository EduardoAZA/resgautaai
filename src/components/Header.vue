<template>
  <div class="border-0">
    <Menubar :model="items" class="overlay-badge">
      <template #end>
        <OverlayBadge value="2" size="small">
          <Avatar 
            label="U"
            size="large"
            style="background-color: #dee9fc; color: #1a2551"
            @click="toggle"
            class="cursor-pointer"
          />
          <Popover ref="op" class="w-[200px]">
            <div class="flex flex-col gap-2">
              <p class="font-bold">Adocao</p>
              <div class="flex mt-2 items-center gap-1">
                <i class="pi pi-filter" style="font-size: 1rem"></i>
                <p>Procurar</p>
              </div>
              <div class="flex items-center gap-1">
                <i class="pi pi-filter" style="font-size: 1rem"></i>
                <p>Procurar</p>
              </div>
              <p class="font-bold mt-2 ">Perfil</p>
              <div class="flex items-center gap-1">
                <i class="pi pi-filter" style="font-size: 1rem"></i>
                <p>Procurar</p>
              </div>
              <div class="flex items-center gap-1">
                <i class="pi pi-filter" style="font-size: 1rem"></i>
                <p>Procurar</p>
              </div>
              <div class="flex items-center gap-1">
                <i class="pi pi-filter" style="font-size: 1rem"></i>
                <p>Procurar</p>
              </div>
              <Divider />
              <div class="flex items-center gap-2">
                <Avatar 
                  label="U"
                  shape="circle"
                  style="background-color: #dee9fc; color: #1a2551"
                />
                <p class="text-sm">Ubelisses Lima</p>
              </div>
            </div>
          </Popover>
        </OverlayBadge>
      </template>
    </Menubar>
  </div>
</template>

<script>
import Menubar from 'primevue/menubar';
import Avatar from 'primevue/avatar';
import Badge from 'primevue/badge';
import OverlayBadge from 'primevue/overlaybadge';
import Divider from 'primevue/divider';
import Popover from 'primevue/popover';
import { RouterLink } from 'vue-router';

export default {
  components: {
    Menubar,
    Avatar,
    Badge,
    OverlayBadge,
    Popover,
    Divider,
    RouterLink
  },
  data() {
    return {
      items: [
        {
          label: 'ResgAUtaAi',
          class: 'font-bold text-3xl text-blue-400 custom-text',
          command: () => this.$router.push('/')
        },
        {
          label: 'Adocao',
          icon: 'pi pi-home',
          command: () => this.$router.push('/adocao')
        },
      ],
    }
  },
  methods: {
    toggle(event) {
      this.$refs.op.toggle(event);
    }
  }
}
</script>

<style>
  .custom-text {
    font-family: 'Chewy';
  }
</style>
