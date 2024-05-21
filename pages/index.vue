<template lang="pug">
div.page-container(:style="{ background: '#efe2c3' }")
  div.header(class="flex justify-center items-center p-4")
    span.text-xl.font-bold Set Builder
    UButton(
      :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
      color="gray"
      variant="ghost"
      aria-label="Theme"
      @click="isDark = !isDark")
  div(class="grid grid-cols-2 md:grid-cols-4 items-center justify-center my-4 md:space-y-0 md:space-x-2")
    UButton(@click="exportToPng('exportArea')" class="btn-icon mx-1") Export All
    UButton(@click="exportToPng('spellArea')" class="btn-icon mx-1") Export Spells
    UButton(@click="exportToPng('palArea')" class="btn-icon mx-1") Export Pals
    UButton(@click="exportToPng('relicArea')" class="btn-icon mx-1") Export Relics
  div(ref="exportArea" class="md:max-w-3xl mx-auto" :style="{ background: '#e3d3af' }")
    UCard(:style="{ background: '#e3d3af' }" :ui="{ body: { padding: '0px' } }" ref="exportArea")
      template(#header)
        div.flex.flex-col.items-center
          input(
            type="text"
            v-model="title"
            class="editable-title text-center mb-2 p-1 border-b-2 border-gray-400"
          )
      template(#default)
        Placeholder.pa-2
          div(ref="spellArea" class="p-4 rounded-md my-4" :style="{ background: '#e3d3af' }")
            h2.section-title.text-lg.font-bold.mb-2 Spells
            div.card-row.flex.flex-wrap.gap-4
              div.card(v-for="spell in selectedSpells" :key="spell.id" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2")
                img.card-image(:src="Object.keys(spell.spell).length > 0 ? spell.spell.image : '/empty.png' " :alt="spell.spell.name" @click="openSpellModal(spell.id)" class="w-full h-32 object-cover rounded-md shadow-md")
                span.level.text-center.block.mt-2 {{ spell.spell.name || 'Select' }}
        UDivider
        Placeholder.p-2
          div(ref="palArea" class="p-4 rounded-md my-4" :style="{ background: '#e3d3af' }")
            h2.section-title.text-lg.font-bold.mb-2 Pals
            div.card-row.flex.flex-wrap.gap-4
              div.card(v-for="pal in selectedPals" :key="pal.id" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2")
                img.card-image(:src="Object.keys(pal.pal).length ? pal.pal.image : '/empty.png'" :alt="pal.pal.name" @click="openPalModal(pal.id)" class="w-full h-32 object-cover rounded-md shadow-md")
                span.level.text-center.block.mt-2 {{ pal.pal.name || 'Select' }}
        UDivider
        Placeholder.p-2
          div(ref="relicArea" class="p-4 rounded-md my-4" :style="{ background: '#e3d3af' }")
            h2.section-title.text-lg.font-bold.mb-2 Relics
            div.card-row.flex.flex-wrap.gap-4
              div.relic-card(v-for="relic in selectedRelics" :key="relic.id" class="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2" @click="openRelicModal(relic.id, relic.type)" :style="{ background: '#e3d3af' }")
                img(:src="relic.background" class="absolute inset-0 w-full h-full object-cover rounded-md shadow-md")

                img(
                  v-if="Object.keys(relic.relic).length"
                  @click="openRelicModal(relic.id, relic.type)"
                  :src="relic.relic.image"
                  :alt="relic.name"
                  class="absolute inset-0 w-full h-full object-cover p-3 rounded-md shadow-md"
                )
                div.level.text-center.block.mt-2 {{ relic.relic.name || 'Select' }}

  UModal(v-model="isSpellModalOpen" :overlay="false")
    template(#default)
      div(:style="{ background: '#e3d3af', borderColor: '#a39476' }").border-8
        h2.section-title.text-lg.font-bold.mb-2 Spell Modal
        div.card-row.flex.flex-wrap.gap-4
          div.card(v-for="spell in spells" :key="spell.id" :class="spell.type" @click="addSpell(spell.id)" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2")
              img.card-image(:src="spell.image" :alt="spell.name" class="w-full h-32 object-cover rounded-md shadow-md")

  UModal(v-model="isPalModalOpen" :overlay="false")
    template(#default)
      div(:style="{ background: '#e3d3af', borderColor: '#a39476' }").border-8
        h2.section-title.text-lg.font-bold.mb-2 Pal Modal
        div.card-row.flex.flex-wrap.gap-4
          div.card(v-for="pal in pals" :key="pal.id" :class="pal.type" @click="addPal(pal.id)" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2")
              img.card-image(:src="pal.image" :alt="pal.name" class="w-full h-32 object-cover rounded-md shadow-md")

  UModal(v-model="isRelicModalOpen" :overlay="false")
    template(#default)
        div(:style="{ background: '#e3d3af', borderColor: '#a39476' }").border-8
          h2.section-title.text-lg.font-bold.mb-2 Relic Modal
          div.card-row.flex.flex-wrap.gap-4
            div.card(v-for="relic in relicsList" :key="relic.id" :class="relic.type" :style="{ backgroundColor: relicsCardColor[relic.color] }" @click="addRelic(relic.id)" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2")
                img.card-image(:src="relic.image" :alt="relic.name" class="w-full h-32 object-cover rounded-md shadow-md")
</template>

<script setup lang="ts">
import relic_background from '~/public/relic_background.svg'
import { useSpells, usePals, useRelics, RelicType } from '~/composables'
import html2canvas from 'html2canvas'

type Spell = {
  id: string
  name: string
  color: string
  image: string
}

type Pal = {
  id: string
  name: string
  color: string
  image: string
}

type Relic = {
  id: string
  name: string
  color: string
  image: string
  type: number
}

type SelectedSpell = { id: string; spell: Spell | {} }
type SelectedPal = { id: string; pal: Pal | {} }
type SelectedRelic = { id: string; type: number; color: string; relic: Relic | {} }

const { spells } = useSpells()
const { pals } = usePals()
const { relics } = useRelics()

const toasts = useToast()

const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  },
})

const exportArea = ref<HTMLDivElement>()
const spellArea = ref<HTMLDivElement>()
const palArea = ref<HTMLDivElement>()
const relicArea = ref<HTMLDivElement>()
const footerArea = ref<HTMLDivElement>()

const title = ref('My set')

const isSpellModalOpen = ref(false)
const currentSpellModalId = ref('')

const isPalModalOpen = ref(false)
const currentPalModalId = ref('')

const isRelicModalOpen = ref(false)
const currentRelicModalId = ref('')
const currentRelicModalType = ref(-1)

const bgMain = '#efe2c3'
const bgParts = '#e3d3af'

const selectedSpells = ref<SelectedSpell[]>([
  {
    id: 'spell-1',
    spell: {},
  },
  {
    id: 'spell-2',
    spell: {},
  },
  {
    id: 'spell-3',
    spell: {},
  },
  {
    id: 'spell-4',
    spell: {},
  },
  {
    id: 'spell-5',
    spell: {},
  },
])
const selectedPals = ref<SelectedPal[]>([
  {
    id: 'pal-1',
    pal: {},
  },
  {
    id: 'pal-2',
    pal: {},
  },
  {
    id: 'pal-3',
    pal: {},
  },
  {
    id: 'pal-4',
    pal: {},
  },
  {
    id: 'pal-5',
    pal: {},
  },
])

const selectedRelics = ref([
  {
    id: 'green',
    type: RelicType.Green,
    background: '/rg_background.svg',

    relic: {},
  },
  {
    id: 'blue',
    type: RelicType.Blue,
    background: '/rb_background.svg',
    relic: {},
  },
  {
    id: 'purple',
    type: RelicType.Purple,
    background: '/rp_background.svg',
    relic: {},
  },
  {
    id: 'yellow',
    type: RelicType.Yellow,
    background: '/ry_background.svg',
    relic: {},
  },
  {
    id: 'orange',
    type: RelicType.Orange,
    background: '/ro_background.svg',
    relic: {},
  },
  {
    id: 'red',
    type: RelicType.Red,
    background: '/rr_background.svg',
    relic: {},
  },
])

const relicsCardColor = {
  green: '#589871',
  blue: '#728ac7',
  purple: '#a774d6',
  yellow: '#ddb845',
  orange: '#d68938',
  red: '#e77974',
}

// const exportToPng = (area) => {
//   const node = exportArea
//   if (!node || !node.value) {
//     console.error('Export area not found')
//     return
//   }
//   toPng(node)
//     .then((dataUrl) => {
//       const link = document.createElement('a')
//       link.download = 'inventory.png'
//       link.href = dataUrl
//       link.click()
//     })
//     .catch((error) => {
//       console.error('Export failed:', error)
//     })
// }

const hideFooter = async () => {
  if (footerArea.value) {
    footerArea.value.style.display = 'none'
  }
}

const showFooter = async () => {
  if (footerArea.value) {
    footerArea.value.style.display = ''
  }
}

const exportToPng = async (areaName: 'exportArea' | 'spellArea' | 'palArea' | 'relicArea') => {
  const areaRefs = {
    exportArea,
    spellArea,
    palArea,
    relicArea,
  }
  const excludeArea = footerArea
  await hideFooter()
  const area = areaRefs[areaName]
  if (!area.value) {
    console.error('Card area not found')
    return
  }

  try {
    const canvas = await html2canvas(area.value)
    const dataUrl = canvas.toDataURL('image/png')

    // Create an image element from the captured data URL
    const img = new Image()
    img.src = dataUrl

    // Wait for the image to load
    img.onload = () => {
      // Create a canvas to draw the cropped image
      const croppedCanvas = document.createElement('canvas')
      const ctx = croppedCanvas.getContext('2d')

      // Set the desired width and height for the cropped image
      const desiredWidth = 600 // Adjust this value as needed
      const desiredHeight = img.height

      croppedCanvas.width = desiredWidth
      croppedCanvas.height = desiredHeight

      // Calculate the x position to start the crop (center the content)
      const x = (img.width - desiredWidth) / 2

      // Draw the cropped image onto the new canvas
      ctx.drawImage(img, x, 0, desiredWidth, desiredHeight, 0, 0, desiredWidth, desiredHeight)

      // Create a link to download the cropped image
      const croppedDataUrl = croppedCanvas.toDataURL('image/png')
      const link = document.createElement('a')
      link.download = `${title.value}.png`
      link.href = croppedDataUrl
      link.click()
    }
  } catch (error) {
    console.error('Export failed:', error)
    toasts.add({ title: 'Export failed', id: 'export-failed', color: 'red' })
  } finally {
    await showFooter()
  }
}

const openSpellModal = (id: string) => {
  console.log('Opening spell modal for', id)
  isSpellModalOpen.value = true
  currentSpellModalId.value = id
}

const closeSpellModal = () => {
  console.log('Closing spell modal')
  isSpellModalOpen.value = false
  currentSpellModalId.value = ''
}

const addSpell = (id: string) => {
  console.log('Adding spell', id)

  const isSpellAlreadySelected = selectedSpells.value.some((spell) => spell.spell?.id === id)

  if (isSpellAlreadySelected) {
    console.log('Spell already selected')
    toasts.add({ title: 'Spell already selected', id: 'spell-already-selected', color: 'red' })
    return
  }

  const spellIndex = selectedSpells.value.findIndex((spell) => spell.id === currentSpellModalId.value)

  if (spellIndex === -1) {
    console.log('Spell not found')
    return
  }

  const spell = spells.value.find((spell) => spell.id === id)

  if (!spell) {
    console.log('Spell not found')
    return
  }

  selectedSpells.value[spellIndex].spell = spell
  closeSpellModal()
}

const removeSpell = (id: string) => {
  console.log('Removing spell', id)
  const spellIndex = selectedSpells.value.findIndex((spell) => spell.id === id)

  if (spellIndex === -1) {
    console.log('Spell not found')
    return
  }

  selectedSpells.value[spellIndex].spell = {}
}

const openPalModal = (id: string) => {
  console.log('Opening pal modal for', id)
  isPalModalOpen.value = true
  currentPalModalId.value = id
}

const closePalModal = () => {
  console.log('Closing pal modal')
  isPalModalOpen.value = false
  currentPalModalId.value = ''
}

const addPal = (id: string) => {
  console.log('Adding pal', id)
  const isPalAlreadySelected = selectedPals.value.some((pal) => pal.pal?.id === id)

  if (isPalAlreadySelected) {
    console.log('Pal already selected')
    alert('Pal already selected')
    return
  }

  const palIndex = selectedPals.value.findIndex((pal) => pal.id === currentPalModalId.value)
  if (palIndex === -1) {
    console.log('Pal not found')
    return
  }

  const pal = pals.value.find((pal) => pal.id === id)
  if (!pal) {
    console.log('Pal not found')
    return
  }

  selectedPals.value[palIndex].pal = pal
  closePalModal()
}

const removePal = (id: string) => {
  console.log('Removing pal', id)
  const palIndex = selectedPals.value.findIndex((pal) => pal.id === id)

  if (palIndex === -1) {
    console.log('Pal not found')
    return
  }

  selectedPals.value[palIndex].pal = {}
}

const relicsList = computed(() => {
  return relics.value.filter((relic) => relic.type === currentRelicModalType.value)
})

const openRelicModal = (id: string, type: number) => {
  console.log('Opening relic modal for', id, 'type', type)
  isRelicModalOpen.value = true
  currentRelicModalId.value = id
  currentRelicModalType.value = type
}

const closeRelicModal = () => {
  console.log('Closing relic modal')
  isRelicModalOpen.value = false
  currentRelicModalId.value = ''
  currentRelicModalType.value = -1
}

const addRelic = (id: string) => {
  console.log('Adding relic', id)
  const isRelicAlreadySelected = selectedRelics.value.some((relic) => relic.relic?.id === id)

  if (isRelicAlreadySelected) {
    console.log('Relic already selected')
    alert('Relic already selected')
    return
  }

  const currentRelicIndex = selectedRelics.value.findIndex((relic) => relic.id === currentRelicModalId.value)
  if (currentRelicIndex === -1) {
    console.log('Relic not found')
    return
  }

  const relic = relics.value.find((relic) => relic.id === id)
  if (!relic) {
    console.log('Relic not found')
    return
  }

  selectedRelics.value[currentRelicIndex].relic = relic

  closeRelicModal()
}

const removeRelic = (id: string) => {
  console.log('Removing relic', id)
  const relicIndex = selectedRelics.value.findIndex((relic) => relic.id === id)

  if (relicIndex === -1) {
    console.log('Relic not found')
    return
  }

  selectedRelics.value[relicIndex].relic = {}
}
</script>

<style scoped>
.page-container {
  padding: 20px;
  font-family: Arial, sans-serif;
  min-height: 100vh;
  height: 100%;
}

.header {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

.card-section {
  margin-bottom: 20px;
}

.section-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
}

.card-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #e3d3af;
}

.card {
  border-radius: 8px;
  padding: 10px;
  margin: 5px;
  width: 100px;
  text-align: center;
  position: relative;
  background-color: transparent;
}

.relic-card {
  width: 80px;
  height: 80px;
}

.card.type1 {
  background-color: #f8d7da;
}

.card.type2 {
  background-color: #d4edda;
}

.card.type3 {
  background-color: #d1ecf1;
}

.card.type4 {
  background-color: #fff3cd;
}

.card-image {
  width: 60px;
  height: 60px;
  display: block;
  margin: 0 auto;
}

.card-info {
  margin-top: 5px;
}

.level {
  font-size: 14px;
  color: #555;
  font-weight: bold;
}

.btn-icon {
  @apply bg-orange-400 text-white p-2 rounded-lg flex items-center justify-center border-2 border-orange-600;
  background-color: #daa520; /* closer to the color in the screenshot */
  color: white;
  border-color: #b8860b;
}
.btn-icon:hover {
  @apply bg-orange-500;
  background-color: #cd950c; /* slightly darker on hover */
}

.editable-title {
  @apply text-2xl font-bold bg-transparent w-1/2 mx-auto text-center focus:outline-none focus:border-gray-500;
  background-color: #e3d3af;
}
</style>
