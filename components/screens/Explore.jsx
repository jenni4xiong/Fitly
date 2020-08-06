import React from 'react';
import { Link } from "react-router-native";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import Carousel from 'react-native-snap-carousel';
import { scrollInterpolator, animatedStyles } from '/Users/jenniferxiong/HRSF128/Fitly/utils/animation.js'

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * .7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3.7 / 4);

class Explore extends React.Component {
  _renderItem = ({ item, index }) => {
    console.log(item.image)
    return (
      <View style={styles.item}>
        <Link id={item._id} to={`/workouts/${item._id}/preview`}>
          <View>
            <Image
              source={{ uri: item.image }}
              style={styles.image}
            />
            <Text style={styles.bodyPartFocus}>{item.bodyPartFocus}</Text>
          </View>
        </Link>
      </View>
    )
  }

  render() {
    const { workouts } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.carouselContainer}>
          <View style={styles.containerItem}>
            <Text style={styles.workoutType}>Resistance</Text>
            <Carousel
              layout={"default"}
              ref={ref => this.carousel = ref}
              data={(workouts.filter((workout) => workout.workoutType === 'Resistance'))}
              sliderWidth={SLIDER_WIDTH}
              itemWidth={ITEM_WIDTH}
              itemHeight={ITEM_HEIGHT}
              renderItem={this._renderItem}
            />
          </View>
          <View style={styles.containerItem}>
            <Text style={styles.workoutType}>HIIT</Text>
            <Carousel
              layout={"default"}
              ref={ref => this.carousel = ref}
              sliderWidth={SLIDER_WIDTH}
              itemWidth={ITEM_WIDTH}
              itemHeight={ITEM_HEIGHT}
              data={(workouts.filter((workout) => workout.workoutType === 'HIIT'))}
              renderItem={this._renderItem}
            />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  carouselContainer: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerItem: {
    height: '45%',
    borderRadius: 2,
    shadowColor: '#07012e',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  bodyPartFocus: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#dd2e44',
    color: 'white',
    height: '20%',
    textAlign: 'center',
    padding: '3%',
  },
  workoutType: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: '1%',
    height: '12%',
    textAlign: 'center',
    color: 'white'
  },
  item: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    margin: '5%',
    padding: '1%',
  },
  image: {
    height: '80%',
    width: '100%',
  }
})

export default Explore;