export class SoundManager {
  private audioContext: AudioContext | null = null
  private isInitialized = false

  constructor() {
    if (typeof window !== 'undefined') {
      this.init()
    }
  }

  private init() {
    try {
      this.audioContext = new (window.AudioContext || (window as typeof window & {webkitAudioContext: typeof AudioContext}).webkitAudioContext)()
      this.isInitialized = true
    } catch (error) {
      console.warn('Web Audio API not supported:', error)
      this.isInitialized = false
    }
  }

  private createOscillator(frequency: number, type: OscillatorType = 'sine'): OscillatorNode | null {
    if (!this.audioContext || !this.isInitialized) return null
    
    const oscillator = this.audioContext.createOscillator()
    oscillator.type = type
    oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime)
    return oscillator
  }

  private createGain(volume: number): GainNode | null {
    if (!this.audioContext || !this.isInitialized) return null
    
    const gainNode = this.audioContext.createGain()
    gainNode.gain.setValueAtTime(volume, this.audioContext.currentTime)
    return gainNode
  }

  private playTone(frequency: number, duration: number, volume: number = 0.1, type: OscillatorType = 'sine') {
    if (!this.audioContext || !this.isInitialized) return

    const oscillator = this.createOscillator(frequency, type)
    const gainNode = this.createGain(volume)
    
    if (!oscillator || !gainNode) return

    oscillator.connect(gainNode)
    gainNode.connect(this.audioContext.destination)

    const currentTime = this.audioContext.currentTime
    gainNode.gain.exponentialRampToValueAtTime(0.001, currentTime + duration)
    
    oscillator.start(currentTime)
    oscillator.stop(currentTime + duration)
  }

  private playChord(frequencies: number[], duration: number, volume: number = 0.05) {
    frequencies.forEach(freq => this.playTone(freq, duration, volume))
  }

  public playPageTurn() {
    // Magical bell/chime page turn sound
    if (!this.audioContext || !this.isInitialized) return

    // Magical bell sequence (pentatonic scale for pleasant harmony)
    const bellFreqs = [523, 659, 784] // C, E, G - pleasant triad
    
    bellFreqs.forEach((freq, index) => {
      setTimeout(() => {
        // Create a bell-like sound with triangle wave and longer decay
        if (!this.audioContext || !this.isInitialized) return

        const oscillator = this.createOscillator(freq, 'triangle')
        const gainNode = this.createGain(0.06)
        
        if (!oscillator || !gainNode) return

        oscillator.connect(gainNode)
        gainNode.connect(this.audioContext.destination)

        const currentTime = this.audioContext.currentTime
        // Bell-like envelope: quick attack, long decay
        gainNode.gain.setValueAtTime(0.06, currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.001, currentTime + 0.8)
        
        oscillator.start(currentTime)
        oscillator.stop(currentTime + 0.8)
      }, index * 100) // Stagger the bells for magical cascade effect
    })

    // Add magical shimmer overtones
    setTimeout(() => {
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          this.playTone(1047 + (i * 200), 0.4, 0.02, 'sine')
        }, i * 150)
      }
    }, 200)
  }

  public playContextSound(soundType: string) {
    switch (soundType) {
      case 'soil':
        this.playSoilSound()
        break
      case 'sun':
        this.playSunSound()
        break
      case 'rain':
        this.playRainSound()
        break
      case 'wind':
        this.playWindSound()
        break
      case 'bees':
        this.playBeesSound()
        break
      case 'magic':
        this.playMagicSound()
        break
      case 'crunch':
        this.playCrunchSound()
        break
      case 'gentle':
        this.playGentleSound()
        break
      case 'sparkle':
        this.playSparkleSound()
        break
      default:
        this.playGentleSound()
    }
  }

  private playSoilSound() {
    // Deep, earthy rumbling
    this.playTone(80, 1.0, 0.08, 'triangle')
    this.playTone(120, 0.8, 0.06, 'triangle')
  }

  private playSunSound() {
    // Warm, bright ascending tones
    const sunFreqs = [261, 329, 392, 523] // C major chord
    this.playChord(sunFreqs, 1.5, 0.06)
    
    // Sparkly overtones
    setTimeout(() => {
      this.playTone(1047, 0.5, 0.03, 'sine')
      this.playTone(1319, 0.4, 0.02, 'sine')
    }, 300)
  }

  private playRainSound() {
    // Gentle pitter-patter
    const rainDuration = 2000
    const rainIntensity = 15
    
    for (let i = 0; i < rainIntensity; i++) {
      setTimeout(() => {
        this.playTone(Math.random() * 800 + 400, 0.1, 0.02, 'sine')
      }, Math.random() * rainDuration)
    }
  }

  private playWindSound() {
    // Whooshing wind effect
    if (!this.audioContext || !this.isInitialized) return

    const duration = 1.5
    const oscillator = this.createOscillator(150, 'sawtooth')
    const gainNode = this.createGain(0.05)
    
    if (!oscillator || !gainNode) return

    oscillator.connect(gainNode)
    gainNode.connect(this.audioContext.destination)

    const currentTime = this.audioContext.currentTime
    oscillator.frequency.exponentialRampToValueAtTime(300, currentTime + duration * 0.5)
    oscillator.frequency.exponentialRampToValueAtTime(100, currentTime + duration)
    gainNode.gain.exponentialRampToValueAtTime(0.001, currentTime + duration)
    
    oscillator.start(currentTime)
    oscillator.stop(currentTime + duration)
  }

  private playBeesSound() {
    // Buzzing bee sounds
    const beeDuration = 1.2
    
    // Multiple bees buzzing at different frequencies
    const beeFrequencies = [200, 220, 240, 260]
    
    beeFrequencies.forEach((freq, index) => {
      setTimeout(() => {
        if (!this.audioContext || !this.isInitialized) return

        const oscillator = this.createOscillator(freq, 'sawtooth')
        const gainNode = this.createGain(0.04)
        
        if (!oscillator || !gainNode) return

        oscillator.connect(gainNode)
        gainNode.connect(this.audioContext.destination)

        const currentTime = this.audioContext.currentTime
        oscillator.frequency.setValueAtTime(freq, currentTime)
        oscillator.frequency.exponentialRampToValueAtTime(freq * 1.2, currentTime + 0.2)
        oscillator.frequency.exponentialRampToValueAtTime(freq, currentTime + 0.4)
        
        oscillator.start(currentTime)
        oscillator.stop(currentTime + beeDuration)
      }, index * 200)
    })
  }

  private playMagicSound() {
    // Magical sparkle with ascending notes
    const magicFreqs = [523, 659, 784, 1047, 1319] // C major pentatonic
    
    magicFreqs.forEach((freq, index) => {
      setTimeout(() => {
        this.playTone(freq, 0.6, 0.04, 'triangle')
      }, index * 100)
    })

    // Magical shimmer
    setTimeout(() => {
      for (let i = 0; i < 8; i++) {
        setTimeout(() => {
          this.playTone(Math.random() * 1000 + 1000, 0.2, 0.02, 'sine')
        }, i * 50)
      }
    }, 500)
  }

  private playCrunchSound() {
    // Crunchy munching sounds
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        this.playTone(Math.random() * 300 + 200, 0.15, 0.05, 'square')
      }, i * 150)
    }
  }

  private playGentleSound() {
    // Soft, peaceful tones
    const gentleFreqs = [196, 247, 294] // G major triad
    this.playChord(gentleFreqs, 2.0, 0.03)
  }

  private playSparkleSound() {
    // Twinkling sparkle effect
    const sparkleCount = 12
    
    for (let i = 0; i < sparkleCount; i++) {
      setTimeout(() => {
        const frequency = Math.random() * 1500 + 800
        this.playTone(frequency, 0.3, 0.02, 'sine')
      }, i * 80)
    }
  }

  public resumeAudioContext() {
    if (this.audioContext && this.audioContext.state === 'suspended') {
      this.audioContext.resume()
    }
  }

  public destroy() {
    if (this.audioContext) {
      this.audioContext.close()
      this.audioContext = null
      this.isInitialized = false
    }
  }
}