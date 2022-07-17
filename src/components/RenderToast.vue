<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['display'],
  setup (props) {
    return () => props.display
  },
})
</script>
