import { StyleSheet, View, Image, Text } from 'react-native';
import { useNavigation, useRouter } from 'expo-router';
import React, { useCallback, useRef, useState, useMemo } from 'react';
import { DrawerActions, useIsFocused } from '@react-navigation/native';
import { useMenuContext } from '../../components/MenuContext';
import { SpatialNavigationFocusableView, SpatialNavigationRoot, SpatialNavigationScrollView, SpatialNavigationNode, SpatialNavigationVirtualizedList, SpatialNavigationVirtualizedListRef, DefaultFocus } from 'react-tv-space-navigation';
import { Direction } from '@bam.tech/lrud';
import { scaledPixels } from '@/hooks/useScale';
import { LinearGradient } from 'expo-linear-gradient';
import generateMovieData from '../../components/CreateMovieData';

interface CardData {
  id: string;
  title: string;
  description: string;
  headerImage: string;
}

export default function IndexScreen() {
  const styles = useGridStyles();
  const router = useRouter();
  const navigation = useNavigation();
  const { isOpen: isMenuOpen, toggleMenu } = useMenuContext();
  const trendingRef = useRef<SpatialNavigationVirtualizedListRef>(null);
  const classicsRef = useRef<SpatialNavigationVirtualizedListRef>(null);
  const hipAndModernRef = useRef<SpatialNavigationVirtualizedListRef>(null);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const isFocused = useIsFocused();
  const isActive = isFocused && !isMenuOpen;

  const movieData = useMemo(() => generateMovieData(), []);
  const focusedItem = useMemo(() => movieData[focusedIndex] || {
    headerImage: 'https://s3.us-west-2.amazonaws.com/whereshouldiski.com/img/ot/movie1-sm.png',
    title: '',
    description: ''
  }, [movieData, focusedIndex]);

  const renderHeader = useCallback(() => (
    <View style={styles.header}>
      <Image 
        style={styles.headerImage}
        source={{uri: focusedItem.headerImage}}
        resizeMode="cover"
      />
      <LinearGradient
        colors={['rgba(0,0,0,0.9)', 'rgba(0,0,0,0.7)', 'rgba(0,0,0,0.3)', 'transparent']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      />
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerTitle}>{focusedItem.title}</Text>
        <Text style={styles.headerDescription}>{focusedItem.description}</Text>
      </View>
    </View>
  ), [focusedItem, styles]);

  const onDirectionHandledWithoutMovement = useCallback(
    (movement: Direction) => {
      console.log("Direction " + movement);
      if (movement === 'left' && focusedIndex === 0) {
        navigation.dispatch(DrawerActions.openDrawer());
        toggleMenu(true);
      }
    },
    [toggleMenu, focusedIndex, navigation],
  );

  const renderScrollableRow = useCallback((title: string, ref: React.RefObject<SpatialNavigationVirtualizedListRef>) => {
    const renderItem = useCallback(({ item, index }: { item: CardData; index: number }) => (
      <SpatialNavigationFocusableView
        onSelect={() => { 
          router.push({
            pathname: '/details',
            params: { 
              title: item.title,
              description: item.description,
              headerImage: item.headerImage
            }         
           });
        }}
        onFocus={() => setFocusedIndex(index)}
      >
        {({ isFocused }) => (
          <View style={[styles.highlightThumbnail, isFocused && styles.highlightThumbnailFocused]}>
            <Image source={{uri: item.headerImage}} style={styles.headerImage} />
            <View style={styles.thumbnailTextContainer}>
             <Text style={styles.thumbnailText}>{item.title}</Text>   
            </View>
          </View>
        )}
      </SpatialNavigationFocusableView>
    ), [router, styles]);

    return (
      <View style={styles.highlightsContainer}>
        <Text style={styles.highlightsTitle}>{title}</Text>
        <SpatialNavigationNode>
          <DefaultFocus>
            <SpatialNavigationVirtualizedList 
              data={movieData} 
              orientation="horizontal" 
              renderItem={renderItem}
              itemSize={scaledPixels(425)}
              numberOfRenderedItems={6}
              numberOfItemsVisibleOnScreen={4}
              onEndReachedThresholdItemsNumber={3}
            />
          </DefaultFocus>
        </SpatialNavigationNode>
      </View>
    );
  }, [movieData, styles]);

  return (
    <SpatialNavigationRoot
      isActive={isActive}
      onDirectionHandledWithoutMovement={onDirectionHandledWithoutMovement}>
        <View style={styles.container}>
        {renderHeader()}       
        <SpatialNavigationScrollView  
          offsetFromStart={scaledPixels(60)}  
          style={styles.scrollContent}>   
          {renderScrollableRow("Trending Movies", trendingRef)}
          {renderScrollableRow("Classics", classicsRef)}
          {renderScrollableRow("Hip and Modern", hipAndModernRef)}
        </SpatialNavigationScrollView>
        </View>
    </SpatialNavigationRoot> 
  );
}

const useGridStyles = function () {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
    scrollContent: {
      flex: 1,
      marginTop: scaledPixels(10),
      marginBottom: scaledPixels(48)
    },
    highlightsTitle: {
      color: '#fff',
      fontSize: scaledPixels(34),
      fontWeight: 'bold',
      marginBottom: scaledPixels(10),
      marginTop: scaledPixels(30),
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 10,
    },
    headerTitle: {
      color: '#fff',
      fontSize: scaledPixels(48),
      fontWeight: 'bold',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 10,
    },
    headerDescription: {
      color: '#fff',
      fontSize: scaledPixels(24),
      fontWeight: '500',
      paddingTop: scaledPixels(16),
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 10,
    },
    thumbnailTextContainer: {
      position: 'absolute',
      bottom: scaledPixels(10),
      left: scaledPixels(10),
      right: scaledPixels(10),
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: scaledPixels(5),
      borderRadius: scaledPixels(3),
    },
    thumbnailText: {
      color: '#fff',
      fontSize: scaledPixels(18),
      fontWeight: 'bold',
      textAlign: 'center',
    },
    highlightThumbnail: {
      width: scaledPixels(400),
      height: scaledPixels(240),
      marginRight: scaledPixels(10),
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: scaledPixels(5),
    },
    highlightThumbnailFocused: {
      borderColor: '#fff',
      borderWidth: scaledPixels(4),
    },
    highlightsContainer: {
      padding: scaledPixels(10),
      height: scaledPixels(360),
    },
    thumbnailPlaceholder: {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      width: '100%',
      height: '100%',
      borderRadius: scaledPixels(5),
    },
    header: {
      width: '100%',
      height: scaledPixels(700),
      position: 'relative',
    },
    headerImage: {
      width: '100%',
      height: '100%',
    },
    gradient: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: '100%',
    },
    headerTextContainer: {
      position: 'absolute',
      left: scaledPixels(40),  // Add left padding
      top: 0,
      bottom: 0,
      justifyContent: 'center',  // Center vertically
      width: '50%',  // Limit width to prevent overlap with right side
    },
    highlightsList: {
      paddingLeft: scaledPixels(20),
    },
    cardImage: {
      width: '100%',
      height: '70%',
      borderTopLeftRadius: scaledPixels(10),
      borderTopRightRadius: scaledPixels(10),
    },
  });
};

