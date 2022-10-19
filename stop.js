Runner.instance_.crashed = true;if (Runner.instance_.distanceRan > Runner.instance_.highestScore) {
                Runner.instance_.highestScore = Math.ceil(Runner.instance_.distanceRan);
                Runner.instance_.distanceMeter.setHighScore(Runner.instance_.highestScore);
            }
