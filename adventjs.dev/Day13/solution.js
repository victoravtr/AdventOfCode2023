function calculateTime(deliveries) {
    const maxDeliveryDuration = 7 * 3600
    let totalSeconds = 0
    deliveries.forEach(delivery => {
      const [hours, minutes, seconds] = delivery.split(':')
      totalSeconds += +seconds + +minutes * 60 + +hours * 3600
    })
    let timeDifference = totalSeconds - maxDeliveryDuration
    const label = timeDifference < 0 ? '-' : ''
    timeDifference = Math.abs(timeDifference)
    const hours = Math.floor(timeDifference / 3600)
    const minutes = Math.floor((timeDifference % 3600) / 60)
    const seconds = timeDifference % 60
    return (
            label
            + hours.toString().padStart(2, '0') + ':'
            + minutes.toString().padStart(2, '0') + ':'
            + seconds.toString().padStart(2, '0')
            )
  }